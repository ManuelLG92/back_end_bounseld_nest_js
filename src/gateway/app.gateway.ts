import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { AppGatewayService } from './app.gateway.service';

@WebSocketGateway(3005, { cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private service: AppGatewayService) {}

  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger();
  private socketList: Socket[] = [];
  //private requests: { from: string; to: string }[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterInit(server: Server): any {
    this.logger.log('Initialized');
  }
  private defaultRoom = 'defaultRoom';
  async handleConnection(client: Socket, ...args: any[]): Promise<any> {
    console.log('args', args);
    const userId = await getValueFromQuery(client, 'userId');
    this.socketList = [...this.socketList, client];
    await this.service.setUserAndSocket(
      // userId ?? 'no -id' + client.id,
      userId,
      client.id,
    );

    client.join([this.defaultRoom, client.id]);

    this.wss.emit('newConnection', {
      user: client.id,
      list: await this.service.getUsersList(),
    });

    this.socketList[client.id] = client;

    this.logger.log(`Client connected ${client.id}`);
  }

  async handleDisconnect(client: Socket): Promise<any> {
    const userId = await this.service.removeUserFromList(client.id);
    this.wss.emit('disconnectedClient', { user: userId });
    this.logger.log(`Client disconnected ${client.id}`);
  }

  @SubscribeMessage('messageToServer')
  async handleMessageBroadCast(client: Socket, data: string): Promise<void> {
    console.log(' client.rooms bf', client.rooms);
    client.join([...client.rooms, 'new room' + Math.random().toString()]);
    console.log(' client.rooms af', client.rooms);

    // const usersToNotify = await this.service.getUsersListWithoutCurrent(
    //   client.id,
    // );
    client.broadcast.emit('messageToClient', data);
    // console.log('user to notify', usersToNotify);
    // usersToNotify.forEach((user) => {
    //   this.wss.to(user.socket).emit('messageToClient', data);
    // });
  }

  @SubscribeMessage('messageToChat')
  async handleMessageBroadCastToChat(
    client: Socket,
    data: string,
  ): Promise<void> {
    console.log('wanna chat', data);

    this.wss.to(data).emit('requestToChat', {
      data: `${client.id} Wanna chat. Do you want accept?`,
      from: client.id,
    });
  }

  @SubscribeMessage('messageToChatResponse')
  async handleMessageToChatResponse(
    client: Socket,
    data: Record<string, string>,
  ): Promise<void> {
    console.log('data', data);
    this.wss.to(data['from']).emit('requestToChatResponse', {
      data: `${client.id} replied: ${data['answer']}`,
    });
  }
}

async function getValueFromQuery(client: Socket, queryName: string) {
  return client.handshake.query[queryName] as string;
}
