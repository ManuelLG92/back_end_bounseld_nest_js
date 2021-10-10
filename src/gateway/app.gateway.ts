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
import { GlobalsService } from '../globals/globals.service';

@WebSocketGateway(3005, { cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private globalService: GlobalsService) {}

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
    const userId = client.handshake.query['userId'] as string;
    const beforeInsert = this.socketList ?? [];
    console.log('before', beforeInsert);

    !this.socketList
      ? (this.socketList = [{ id: userId, socket: client.id }])
      : this.socketList.push({ id: userId, socket: client.id });
    console.log(this.socketList);
    console.log('todo handle connection', userId, args);
    this.logger.log(`Client connected ${client.id}`);
    this.wss.emit('newConnection', { user: userId, list: beforeInsert });
  }

  async handleDisconnect(client: Socket): Promise<any> {
    const userId = this.socketList?.filter((el) => el.socket === client.id);
    this.wss.emit('disconnectedClient', { user: userId });
    this.socketList = this.socketList?.filter((el) => el.socket !== client.id);
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
  handleMessageBroadCastToChat(client: Socket, data: string): void {
    // let from = client.handshake.query['from'] as string;
    // let to = client.handshake.query['to'] as string;
    const from = getValueFromQuery(client, 'from');
    const to = getValueFromQuery(client, 'to');
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

function getValueFromQuery(client: Socket, queryName: string) {
  return (this.socketList[client.handshake.query[queryName] as string] =
    client.id);
}
