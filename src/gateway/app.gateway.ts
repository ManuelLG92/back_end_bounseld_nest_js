import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(3005, { cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor() {}

  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterInit(server: Server): any {
    this.logger.log('Initialized');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handleConnection(client: Socket, ...args: any[]): Promise<any> {
    const userIdFromRequest = client.handshake.query['userId'];
     console.log('todo handle connection')
      

  
    this.logger.log(`Client connected ${client.id}`);
  }

  async handleDisconnect(client: Socket): Promise<any> {
    this.logger.log(`Client disconnected ${client.id}`);
  }

  @SubscribeMessage('messageToServer')
  handleMessageBroadCast(client: Socket, data: string): void {
    this.wss.emit('messageToClient', data);
  }
}
