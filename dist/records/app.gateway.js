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
const records_service_1 = require("./records.service");
let AppGateway = class AppGateway {
    constructor(recordsService) {
        this.recordsService = recordsService;
        this.logger = new common_1.Logger();
    }
    afterInit(server) {
        this.logger.log('Initialized');
    }
    async handleConnection(client, ...args) {
        const userIdFromRequest = client.handshake.query['userId'];
        if (typeof userIdFromRequest === 'string') {
            await this.recordsService.addNewConnection(client.id, parseInt(userIdFromRequest));
        }
        this.logger.log(`Client connected ${client.id}`);
    }
    async handleDisconnect(client) {
        await this.recordsService.closeConnection(client.id);
        this.logger.log(`Client disconnected ${client.id}`);
    }
    handleMessageBroadCast(client, data) {
        this.wss.emit('messageToClient', data);
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
AppGateway = __decorate([
    websockets_1.WebSocketGateway(3005, { cors: true }),
    __metadata("design:paramtypes", [records_service_1.RecordsService])
], AppGateway);
exports.AppGateway = AppGateway;
//# sourceMappingURL=app.gateway.js.map