import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    wss: Server;
    private logger;
    afterInit(server: Server): any;
    handleConnection(client: Socket, ...args: any[]): any;
    handleDisconnect(client: Socket): any;
    handleMessageBroadCast(client: Socket, data: string): void;
}
