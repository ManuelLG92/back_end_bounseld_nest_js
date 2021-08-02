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

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterInit(server: Server): any {
    this.logger.log('Initialized');
  }
  /*  @SubscribeMessage('messageToServer')
  handleMessageNormal(client: Socket, data: string): WsResponse<string> {

    return { event: 'messageToClient', data };
  }*/

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleConnection(client: Socket, ...args: any[]): any {
    this.logger.log(`Client disconnected ${client.id}`);
  }

  handleDisconnect(client: Socket): any {
    this.logger.log(`Client connected ${client.id}`);
  }

  @SubscribeMessage('messageToServer')
  handleMessageBroadCast(client: Socket, data: string): void{
    this.wss.emit('messageToClient', data);
  }

  /*  @SubscribeMessage('messageFromServerShorter')
    handleMessageShorter(client: Socket, data: string): void {
      client.emit('message', data);
    }*/
}
