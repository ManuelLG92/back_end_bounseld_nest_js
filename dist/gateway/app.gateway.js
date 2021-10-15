"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const app_gateway_service_1 = require("./app.gateway.service");
let AppGateway = class AppGateway {
    constructor(service) {
        this.service = service;
        this.list = [];
        this.logger = new common_1.Logger();
    }
    afterInit(server) {
        this.logger.log('Initialized');
    }
    async handleConnection(client, ...args) {
        const userId = client.handshake.query['userId'];
        this.wss.emit('newConnection', {
            user: userId,
            list: await this.service.getUsersList(),
        });
        await this.service.setUserAndSocket(userId, client.id);
        this.logger.log(`Client connected ${client.id}`);
    }
    async handleDisconnect(client) {
        const userId = await this.service.removeUserFromList(client.id);
        console.log(userId);
        this.wss.emit('disconnectedClient', { user: userId });
        this.logger.log(`Client disconnected ${client.id}`);
    }
    handleMessageBroadCast(client, data) {
        this.list.filter((el) => el != client.id);
        this.socketList.filter((c) => c.socket != client.id);
        console.log(this.list);
        this.wss.emit('messageToClient', data);
    }
    async handleMessageBroadCastToChat(client, data) {
        const from = await getValueFromQuery(client, 'from');
        const to = await getValueFromQuery(client, 'to');
        if ((from === null || from === void 0 ? void 0 : from.length) && (to === null || to === void 0 ? void 0 : to.length)) {
            this.wss.to(to).emit('requestToChat', {
                data: `${from} Wanna chat. Do you want accept?`,
            });
        }
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", socket_io_1.Server)
], AppGateway.prototype, "wss", void 0);
__decorate([
    websockets_1.SubscribeMessage('messageToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleMessageBroadCast", null);
__decorate([
    websockets_1.SubscribeMessage('messageToChat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handleMessageBroadCastToChat", null);
AppGateway = __decorate([
    websockets_1.WebSocketGateway(3005, { cors: true }),
    __metadata("design:paramtypes", [app_gateway_service_1.AppGatewayService])
], AppGateway);
exports.AppGateway = AppGateway;
async function getValueFromQuery(client, queryName) {
    return (await client.handshake.query[queryName]);
}
//# sourceMappingURL=app.gateway.js.map