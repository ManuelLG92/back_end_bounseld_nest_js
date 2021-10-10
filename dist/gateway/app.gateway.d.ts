import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GlobalsService } from '../globals/globals.service';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private globalService;
    constructor(globalService: GlobalsService);
    wss: Server;
    private list;
    private socketList;
    private chatList;
    private logger;
    afterInit(server: Server): any;
    handleConnection(client: Socket, ...args: any[]): Promise<any>;
    handleDisconnect(client: Socket): Promise<any>;
    handleMessageBroadCast(client: Socket, data: string): void;
    handleMessageBroadCastToChat(client: Socket, data: string): void;
}
