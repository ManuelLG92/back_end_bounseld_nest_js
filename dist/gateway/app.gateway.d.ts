import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor();
    wss: Server;
    private logger;
    afterInit(server: Server): any;
    handleConnection(client: Socket, ...args: any[]): Promise<any>;
    handleDisconnect(client: Socket): Promise<any>;
    handleMessageBroadCast(client: Socket, data: string): void;
}
