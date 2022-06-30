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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterInit(server: Server): any {
    this.logger.log('Initialized');
  }
  private defaultRoom = 'defaultRoom';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handleConnection(client: Socket, ...args: any[]): Promise<any> {
    const userId = await getValueFromQuery(client, 'userId');

    await this.service.setUserAndSocket(userId ?? 'no id', client.id);

    client.join([this.defaultRoom, client.id]);

    this.wss.emit('newConnection', {
      user: userId,
      list: await this.service.getUsersList(),
    });

    this.logger.log(`Client connected ${client.id}`);
  }

  async handleDisconnect(client: Socket): Promise<any> {
    // const userId = this.socketList?.filter((el) => el.socket === client.id);
    const userId = await this.service.removeUserFromList(client.id);
    console.log(userId);
    this.wss.emit('disconnectedClient', { user: userId });
    this.logger.log(`Client disconnected ${client.id}`);
  }

  @SubscribeMessage('messageToServer')
  async handleMessageBroadCast(client: Socket, data: string): Promise<void> {
    console.log('current', client.id);
    const usersToNotify = await this.service.getUsersListWithoutCurrent(
      client.id,
    );
    usersToNotify.forEach((user) => {
      this.wss.to(user.socket).emit('messageToClient', data);
    });
  }

  @SubscribeMessage('messageToChat')
  async handleMessageBroadCastToChat(
    client: Socket,
    data: string,
  ): Promise<void> {
    const from = await getValueFromQuery(client, 'from');
    const to = await getValueFromQuery(client, 'to');
    if (from?.length && to?.length) {
      this.wss.to(to).emit('requestToChat', {
        data: `${from} Wanna chat. Do you want accept?`,
      });
    }
    /*
      console.log('received message top chat req');
    this.list.filter((el) => {
      el != client.id &&
        this.wss.to(el).emit('requestToChat', {
          data: 'Wanna chat',
        });
    });*/
  }
}

async function getValueFromQuery(client: Socket, queryName: string) {
  return client.handshake.query[queryName] as string;
}
