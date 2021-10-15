import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AppGatewayService } from './app.gateway.service';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private service;
    constructor(service: AppGatewayService);
    wss: Server;
    private list;
    private socketList;
    private chatList;
    private logger;
    afterInit(server: Server): any;
    handleConnection(client: Socket, ...args: any[]): Promise<any>;
    handleDisconnect(client: Socket): Promise<any>;
    handleMessageBroadCast(client: Socket, data: string): void;
    handleMessageBroadCastToChat(client: Socket, data: string): Promise<void>;
}
