import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { RecordsService } from './records.service';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    wss: Server;
    private logger;
    afterInit(server: Server): any;
    handleConnection(client: Socket, ...args: any[]): Promise<any>;
    handleDisconnect(client: Socket): Promise<any>;
    handleMessageBroadCast(client: Socket, data: string): void;
}
