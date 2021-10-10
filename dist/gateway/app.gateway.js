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
const globals_service_1 = require("../globals/globals.service");
let AppGateway = class AppGateway {
    constructor(globalService) {
        this.globalService = globalService;
        this.list = [];
        this.logger = new common_1.Logger();
    }
    afterInit(server) {
        this.logger.log('Initialized');
    }
    async handleConnection(client, ...args) {
        var _a;
        const userId = client.handshake.query['userId'];
        const beforeInsert = (_a = this.socketList) !== null && _a !== void 0 ? _a : [];
        console.log('before', beforeInsert);
        !this.socketList
            ? (this.socketList = [{ id: userId, socket: client.id }])
            : this.socketList.push({ id: userId, socket: client.id });
        console.log(this.socketList);
        console.log('todo handle connection', userId, args);
        this.logger.log(`Client connected ${client.id}`);
        this.wss.emit('newConnection', { user: userId, list: beforeInsert });
    }
    async handleDisconnect(client) {
        var _a, _b;
        const userId = (_a = this.socketList) === null || _a === void 0 ? void 0 : _a.filter((el) => el.socket === client.id);
        this.wss.emit('disconnectedClient', { user: userId });
        this.socketList = (_b = this.socketList) === null || _b === void 0 ? void 0 : _b.filter((el) => el.socket !== client.id);
        this.logger.log(`Client disconnected ${client.id}`);
    }
    handleMessageBroadCast(client, data) {
        this.list.filter((el) => el != client.id);
        this.socketList.filter((c) => c.socket != client.id);
        console.log(this.list);
        this.wss.emit('messageToClient', data);
    }
    handleMessageBroadCastToChat(client, data) {
        const from = getValueFromQuery(client, 'from');
        const to = getValueFromQuery(client, 'to');
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
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleMessageBroadCastToChat", null);
AppGateway = __decorate([
    websockets_1.WebSocketGateway(3005, { cors: true }),
    __metadata("design:paramtypes", [globals_service_1.GlobalsService])
], AppGateway);
exports.AppGateway = AppGateway;
function getValueFromQuery(client, queryName) {
    return (this.socketList[client.handshake.query[queryName]] =
        client.id);
}
//# sourceMappingURL=app.gateway.js.map