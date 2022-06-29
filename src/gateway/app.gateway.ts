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
import { ChatRoom, SocketConnection } from './interfaces';
import { AppGatewayService } from './app.gateway.service';

@WebSocketGateway(3005, { cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private service: AppGatewayService) {}

  @WebSocketServer() wss: Server;

  private list: Array<string> = [];
  private socketList: Array<SocketConnection>;
  private chatList: Array<ChatRoom>;
  private logger: Logger = new Logger();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterInit(server: Server): any {
    this.logger.log('Initialized');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handleConnection(client: Socket, ...args: any[]): Promise<any> {
    const userId = await getValueFromQuery(client, 'userId');

    await this.service.setUserAndSocket(userId, client.id);

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
    //this.socketList = this.socketList?.filter((el) => el.socket !== client.id);
    // await this.service.removeUserFromList(client.id);
    this.logger.log(`Client disconnected ${client.id}`);
  }

  @SubscribeMessage('messageToServer')
  handleMessageBroadCast(client: Socket, data: string): void {
    this.list.filter((el) => el != client.id);
    this.socketList.filter((c) => c.socket != client.id);
    console.log(this.list);
    this.wss.emit('messageToClient', data);
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
