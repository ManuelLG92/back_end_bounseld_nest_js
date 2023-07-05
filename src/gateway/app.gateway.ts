import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger, UseGuards } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { AppGatewayService } from './app.gateway.service';
import { JwtSocketGuard } from '../auth/guards';

@WebSocketGateway(3005, { cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger: Logger = new Logger();
  constructor(private readonly service: AppGatewayService) {}

  @WebSocketServer() wss: Server;

  private defaultRoom = 'defaultRoom';
  //private requests: { from: string; to: string }[] = [];
  afterInit(server: Server): any {
    server.allSockets().then((s) => console.log(s));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handleConnection(client: Socket, ...args: any[]): Promise<any> {
    const userId = await getValueFromQuery(client, 'userId');
    await this.service.setUserAndSocket(userId, client.id);

    client.join([this.defaultRoom, client.id]);

    this.wss.emit('newConnection', {
      user: client.id,
      list: await this.service.getUsersList(),
    });
    this.logger.log(`Client connected ${client.id}`);
  }

  async handleDisconnect(client: Socket): Promise<any> {
    const userId = await this.service.removeUserFromList(client.id);
    this.wss.emit('disconnectedClient', { user: userId });
    this.logger.log(`Client disconnected ${client.id}`);
  }
  @UseGuards(JwtSocketGuard)
  @SubscribeMessage('messageToServer')
  async handleMessageBroadCast(client: Socket, data: string): Promise<void> {
    //const userId = await getValueFromQuery(client, 'userId');
    console.log(' client.rooms bf', client.rooms);
    client.join([...new Set(client.rooms)]);
    console.log(' client.rooms af', client.rooms);

    const usersToNotify = await this.service.getUsersListWithoutCurrent(
      client.id,
    );
    console.log('users to notify', usersToNotify);
    usersToNotify.forEach((user) => {
      this.wss.to(user.socket).emit('messageToClient', data);
    });
  }

  @SubscribeMessage('messageToChat')
  async handleMessageBroadCastToChat(
    client: Socket,
    data: string,
  ): Promise<void> {
    console.log('wanna chat', data);
    const clientId = client.id;

    const newChatChannel = this.service.buildChatChannelId({
      from: data,
      to: clientId,
    });
    client.rooms.add(newChatChannel);
    this.wss.to(data).emit('requestToChat', {
      data: `${clientId} Wanna chat. Do you want to accept?`,
      from: client.id,
    });
  }

  @SubscribeMessage('messageToChatResponse')
  async handleMessageToChatResponse(
    client: Socket,
    data: Record<string, unknown>,
  ): Promise<void> {
    console.log('data', data);
    const fromUser = String(data['from']);
    const response = Boolean(data['answer']);
    const clientId = client.id;
    let message = `${clientId} declined your invitation.`;

    if (!response) {
      this.wss.to(fromUser).emit('requestToChatResponse', {
        user: client.id,
        response,
        message,
      });
      return;
    }

    message = `${clientId} accepted your invitation.`;
    const newChatChannel = this.service.buildChatChannelId({
      from: fromUser,
      to: clientId,
    });
    client.rooms.add(newChatChannel);
    this.wss.to(fromUser).emit('requestToChatResponse', {
      user: client.id,
      response,
      message,
      newChatChannel,
    });
  }

  @SubscribeMessage('messageBetweenChat')
  async handleMessagesBetweenChat(
    client: Socket,
    data: unknown,
  ): Promise<void> {
    console.log('messageBetweenChat', data);
    console.log('messageBetweenChat', client.rooms.values());

    const clientId = client.id;
    const to = data['to'];
    const socketToSend = await this.service.getUser(to);
    console.log('messageBetweenChat', socketToSend);
    this.wss.to(socketToSend.socket).emit('messageBetweenChat', {
      data: data['message'],
      from: clientId,
    });
  }
}

async function getValueFromQuery(client: Socket, queryName: string) {
  return client.handshake.headers[queryName] as string;
}
