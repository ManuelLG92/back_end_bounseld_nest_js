/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const app_gateway_module_1 = __webpack_require__(7);
const prisma_module_1 = __webpack_require__(12);
const user_module_1 = __webpack_require__(15);
const auth_module_1 = __webpack_require__(78);
const globals_module_1 = __webpack_require__(94);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            globals_module_1.GlobalsModule,
            app_gateway_module_1.AppGatewayModule,
            prisma_module_1.PrismaModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    root() {
        return { message: 'Hello world!' };
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppGatewayModule = void 0;
const common_1 = __webpack_require__(1);
const app_gateway_1 = __webpack_require__(8);
const app_gateway_service_1 = __webpack_require__(11);
let AppGatewayModule = class AppGatewayModule {
};
AppGatewayModule = __decorate([
    common_1.Module({
        imports: [],
        providers: [app_gateway_1.AppGateway, app_gateway_service_1.AppGatewayService],
    })
], AppGatewayModule);
exports.AppGatewayModule = AppGatewayModule;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppGateway = void 0;
const websockets_1 = __webpack_require__(9);
const common_1 = __webpack_require__(1);
const socket_io_1 = __webpack_require__(10);
const app_gateway_service_1 = __webpack_require__(11);
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
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], AppGateway.prototype, "wss", void 0);
__decorate([
    websockets_1.SubscribeMessage('messageToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object, String]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleMessageBroadCast", null);
__decorate([
    websockets_1.SubscribeMessage('messageToChat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object, String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AppGateway.prototype, "handleMessageBroadCastToChat", null);
AppGateway = __decorate([
    websockets_1.WebSocketGateway(3005, { cors: true }),
    __metadata("design:paramtypes", [typeof (_e = typeof app_gateway_service_1.AppGatewayService !== "undefined" && app_gateway_service_1.AppGatewayService) === "function" ? _e : Object])
], AppGateway);
exports.AppGateway = AppGateway;
async function getValueFromQuery(client, queryName) {
    return (await client.handshake.query[queryName]);
}


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppGatewayService = void 0;
const common_1 = __webpack_require__(1);
let AppGatewayService = class AppGatewayService {
    async setUserAndSocket(user, socket) {
        !this.socketList
            ? (this.socketList = [{ id: user, socket: socket }])
            : this.socketList.push({ id: user, socket: socket });
        return this.socketList;
    }
    async getUsersList() {
        var _a;
        return (_a = this.socketList) !== null && _a !== void 0 ? _a : [];
    }
    async removeUserFromList(socket) {
        var _a;
        const user = await this.getUser(socket);
        this.socketList = (_a = this.socketList) === null || _a === void 0 ? void 0 : _a.filter((el) => el.socket !== socket);
        return user === null || user === void 0 ? void 0 : user.id;
    }
    async getUser(socket) {
        var _a;
        return (_a = this.socketList) === null || _a === void 0 ? void 0 : _a.find((el) => (el.socket = socket));
    }
};
AppGatewayService = __decorate([
    common_1.Injectable()
], AppGatewayService);
exports.AppGatewayService = AppGatewayService;


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(13);
let PrismaModule = class PrismaModule {
};
PrismaModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);
exports.PrismaModule = PrismaModule;


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(1);
const client_1 = __webpack_require__(14);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
};
PrismaService = __decorate([
    common_1.Injectable()
], PrismaService);
exports.PrismaService = PrismaService;


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(1);
const Controllers = __webpack_require__(16);
const Application_1 = __webpack_require__(67);
const PrismaUserRepository_1 = __webpack_require__(76);
const repository_1 = __webpack_require__(32);
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        controllers: [...Object.values(Controllers)],
        providers: [
            ...Object.values(Application_1.PortServices),
            ...Object.values(Application_1.CommandHandlers),
            {
                provide: repository_1.UserProviderConstants.USER_REPOSITORY,
                useClass: PrismaUserRepository_1.PrismaUserRepository,
            },
        ],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(62), exports);


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCreator = void 0;
const common_1 = __webpack_require__(1);
const decorators_1 = __webpack_require__(18);
const util_1 = __webpack_require__(22);
const create_user_dto_1 = __webpack_require__(26);
const Services_1 = __webpack_require__(28);
let UserCreator = class UserCreator {
    constructor(saver, finder) {
        this.saver = saver;
        this.finder = finder;
    }
    async create(createUserRestDto, ctx) {
        if (await this.finder.findOneByEmail(createUserRestDto.email)) {
            throw new common_1.BadRequestException(`User ${createUserRestDto.email} already registered.`);
        }
        return await this.saver.save(Object.assign(Object.assign({}, createUserRestDto), { ctx: ctx }));
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, decorators_1.RequestDetails()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _a : Object, typeof (_b = typeof util_1.IRequestDetail !== "undefined" && util_1.IRequestDetail) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserCreator.prototype, "create", null);
UserCreator = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [typeof (_c = typeof Services_1.UserSaver !== "undefined" && Services_1.UserSaver) === "function" ? _c : Object, typeof (_d = typeof Services_1.UserFinder !== "undefined" && Services_1.UserFinder) === "function" ? _d : Object])
], UserCreator);
exports.UserCreator = UserCreator;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseRequestDetails = exports.RequestDetails = void 0;
const common_1 = __webpack_require__(1);
exports.RequestDetails = common_1.createParamDecorator((_data, context) => {
    return exports.parseRequestDetails(context.switchToHttp().getRequest());
});
const parseRequestDetails = (req) => {
    return {
        ip: req.ip,
        originalUrl: req.originalUrl,
        hostname: req.headers.host,
        userAgent: req.headers['user-agent'],
    };
};
exports.parseRequestDetails = parseRequestDetails;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkData = exports.Auth = void 0;
const common_1 = __webpack_require__(1);
const _ = __webpack_require__(21);
exports.Auth = common_1.createParamDecorator((_data, context) => {
    exports.checkData(context.switchToHttp().getRequest());
});
const checkData = (req) => {
    var _a, _b, _c, _d;
    const check = _.isEqual({
        ip: (_a = req.user) === null || _a === void 0 ? void 0 : _a.ip,
        hostname: (_b = req.user) === null || _b === void 0 ? void 0 : _b.hostname,
        userAgent: (_c = req.user) === null || _c === void 0 ? void 0 : _c.userAgent,
    }, {
        ip: req.ip,
        hostname: (_d = req.headers) === null || _d === void 0 ? void 0 : _d.host,
        userAgent: req.headers['user-agent'],
    });
    if (!check) {
        throw new common_1.UnauthorizedException('Access forbidden');
    }
};
exports.checkData = checkData;


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(27);
class CreateUserDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.Length(2, 40),
    __metadata("design:type", String)
], CreateUserDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(2, 100),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(2, 100),
    __metadata("design:type", String)
], CreateUserDto.prototype, "surname", void 0);
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(8, 32),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    class_validator_1.Min(18),
    class_validator_1.Max(100),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.Length(2, 255),
    __metadata("design:type", String)
], CreateUserDto.prototype, "avatar", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MaxLength(255),
    __metadata("design:type", String)
], CreateUserDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(2),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "nativeLanguages", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "learningLanguages", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserFinder = void 0;
const common_1 = __webpack_require__(1);
const UserRepositoryPort_1 = __webpack_require__(31);
const repository_1 = __webpack_require__(32);
let UserFinder = class UserFinder {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll() {
        return await this.repository.findAll();
    }
    async findOne(id) {
        return await this.repository.findOne(id);
    }
    async findOneByEmail(email) {
        return await this.repository.findOneByEmail(email);
    }
};
UserFinder = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(repository_1.UserProviderConstants.USER_REPOSITORY)),
    __metadata("design:paramtypes", [typeof (_a = typeof UserRepositoryPort_1.UserRepositoryPort !== "undefined" && UserRepositoryPort_1.UserRepositoryPort) === "function" ? _a : Object])
], UserFinder);
exports.UserFinder = UserFinder;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepositoryPort = void 0;
const common_1 = __webpack_require__(1);
let UserRepositoryPort = class UserRepositoryPort {
};
UserRepositoryPort = __decorate([
    common_1.Injectable()
], UserRepositoryPort);
exports.UserRepositoryPort = UserRepositoryPort;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProviderConstants = void 0;
var UserProviderConstants;
(function (UserProviderConstants) {
    UserProviderConstants["USER_REPOSITORY"] = "USER_REPOSITORY";
    UserProviderConstants["USER_REPOSITORY_SAVER"] = "USER_REPOSITORY";
    UserProviderConstants["USER_REPOSITORY_FINDER"] = "USER_REPOSITORY";
    UserProviderConstants["USER_REPOSITORY_REMOVER"] = "USER_REPOSITORY_REMOVER";
})(UserProviderConstants = exports.UserProviderConstants || (exports.UserProviderConstants = {}));


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRemover = void 0;
const common_1 = __webpack_require__(1);
const UserRepositoryPort_1 = __webpack_require__(31);
const repository_1 = __webpack_require__(32);
let UserRemover = class UserRemover {
    constructor(userRepositoryPort) {
        this.userRepositoryPort = userRepositoryPort;
    }
    async remove(id) {
        return await this.userRepositoryPort.remove(id);
    }
};
UserRemover = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(repository_1.UserProviderConstants.USER_REPOSITORY)),
    __metadata("design:paramtypes", [typeof (_a = typeof UserRepositoryPort_1.UserRepositoryPort !== "undefined" && UserRepositoryPort_1.UserRepositoryPort) === "function" ? _a : Object])
], UserRemover);
exports.UserRemover = UserRemover;


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSaver = void 0;
const common_1 = __webpack_require__(1);
const UserRepositoryPort_1 = __webpack_require__(31);
const repository_1 = __webpack_require__(32);
let UserSaver = class UserSaver {
    constructor(userRepositoryPort) {
        this.userRepositoryPort = userRepositoryPort;
    }
    async save(user) {
        return await this.userRepositoryPort.save(Object.assign({}, user));
    }
};
UserSaver = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(repository_1.UserProviderConstants.USER_REPOSITORY)),
    __metadata("design:paramtypes", [typeof (_a = typeof UserRepositoryPort_1.UserRepositoryPort !== "undefined" && UserRepositoryPort_1.UserRepositoryPort) === "function" ? _a : Object])
], UserSaver);
exports.UserSaver = UserSaver;


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserFindById = void 0;
const common_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(28);
let UserFindById = class UserFindById {
    constructor(findService) {
        this.findService = findService;
    }
    findOne(id) {
        return this.findService.findOne(id);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserFindById.prototype, "findOne", null);
UserFindById = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.UserFinder !== "undefined" && Services_1.UserFinder) === "function" ? _a : Object])
], UserFindById);
exports.UserFindById = UserFindById;


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserFindAll = void 0;
const common_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(28);
let UserFindAll = class UserFindAll {
    constructor(findService) {
        this.findService = findService;
    }
    findAll() {
        return this.findService.findAll();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserFindAll.prototype, "findAll", null);
UserFindAll = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.UserFinder !== "undefined" && Services_1.UserFinder) === "function" ? _a : Object])
], UserFindAll);
exports.UserFindAll = UserFindAll;


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserUpdater = void 0;
const common_1 = __webpack_require__(1);
const update_user_dto_1 = __webpack_require__(38);
const Services_1 = __webpack_require__(28);
const User_1 = __webpack_require__(40);
let UserUpdater = class UserUpdater {
    constructor(userRestService) {
        this.userRestService = userRestService;
    }
    update(id, updateUserRestDto) {
        console.log('user id patch', id);
        return this.userRestService.save(Object.assign({}, User_1.User.fromObject(updateUserRestDto)));
    }
};
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], UserUpdater.prototype, "update", null);
UserUpdater = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [typeof (_b = typeof Services_1.UserSaver !== "undefined" && Services_1.UserSaver) === "function" ? _b : Object])
], UserUpdater);
exports.UserUpdater = UserUpdater;


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__(39);
const create_user_dto_1 = __webpack_require__(26);
class UpdateUserDto extends mapped_types_1.PartialType(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const idVO_1 = __webpack_require__(41);
const VO_1 = __webpack_require__(45);
const booleanVO_1 = __webpack_require__(58);
const stringNullableVO_1 = __webpack_require__(59);
const stringVO_1 = __webpack_require__(43);
const globals_service_1 = __webpack_require__(60);
class User {
    constructor(id, name, surname, email, password, avatar, age, isGoogleUser, description, role, blackList, isActive, country, gender, nativeLanguages, learningLanguages, ctx) {
        this.id = idVO_1.ID.generate();
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.age = age;
        this.isGoogleUser = isGoogleUser;
        this.description = description;
        this.role = role;
        this.isActive = isActive;
        this.gender = gender;
        this.country = country;
        this.nativeLanguages = nativeLanguages;
        this.learningLanguages = learningLanguages;
        this.ctx = ctx;
        this.isBanish = booleanVO_1.BooleanVO.create(false);
        this.blackList = VO_1.BlackListVO.create();
    }
    static async create(props) {
        var _a;
        return new this(idVO_1.ID.fromString(props.id), new VO_1.NameVO(props.name), new VO_1.SurnameVO(props.surname), VO_1.EmailVo.create(props.email), new VO_1.PasswordVO(await globals_service_1.GlobalsService.encryptData(props.password)), new VO_1.AvatarVO(props.avatar), new VO_1.AgeVO(props.age), booleanVO_1.BooleanVO.create(props.isGoogleUser), stringNullableVO_1.StringNullableVO.create(props.description), VO_1.RolesVO.create((_a = props.roles) !== null && _a !== void 0 ? _a : ['user']), VO_1.BlackListVO.create(props.blackList), booleanVO_1.BooleanVO.create(false), stringVO_1.StringVO.create(props.country), new VO_1.GenderVO(props.gender), props.nativeLanguages, props.learningLanguages, props.ctx);
    }
    static fromObject(props) {
        return {
            id: props.id,
            name: props.name,
            surname: props.surname,
            email: props.email,
            roles: props.roles,
            password: props.password,
            age: props.age,
            avatar: props.avatar,
            description: props.description,
            gender: props.gender,
            country: props.country,
            nativeLanguages: props.nativeLanguages,
            learningLanguages: props.learningLanguages,
            ctx: props.ctx,
        };
    }
    toPersistence() {
        return {
            id: this.id.value(),
            name: this.name.value(),
            surname: this.surname.value(),
            email: this.email.value(),
            roles: this.role.items(),
            password: this.password.value(),
            age: this.age.value(),
            avatar: this.avatar.value(),
            description: this.description.value(),
            gender: this.gender.value(),
            country: this.country.value(),
            nativeLanguages: this.nativeLanguages,
            learningLanguages: this.learningLanguages,
            ctx: this.ctx,
        };
    }
}
exports.User = User;


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ID = void 0;
const uuid_1 = __webpack_require__(42);
const stringVO_1 = __webpack_require__(43);
const common_1 = __webpack_require__(1);
class ID extends stringVO_1.StringVO {
    constructor(valuePrimitive) {
        super(valuePrimitive);
        this.validate();
    }
    static fromString(value) {
        return new this(value);
    }
    static generate() {
        return new this(uuid_1.v4());
    }
    validate() {
        if (!uuid_1.validate(this.valuePrimitive)) {
            throw new common_1.BadRequestException(`Incorrect Uuid format. "${this.valuePrimitive}"`);
        }
    }
}
exports.ID = ID;


/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringVO = void 0;
const common_1 = __webpack_require__(1);
const BaseVO_1 = __webpack_require__(44);
class StringVO extends BaseVO_1.BaseVO {
    constructor(value) {
        super();
        this.valuePrimitive = value.trim();
        this.validate();
    }
    static create(value) {
        return new this(value);
    }
    value() {
        return this.valuePrimitive;
    }
    validate() {
        if (typeof this.valuePrimitive !== 'string') {
            throw new common_1.BadRequestException('Just are allowed string type.');
        }
    }
}
exports.StringVO = StringVO;


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseVO = void 0;
class BaseVO {
}
exports.BaseVO = BaseVO;


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(51), exports);
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(53), exports);
__exportStar(__webpack_require__(54), exports);
__exportStar(__webpack_require__(55), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(57), exports);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgeVO = void 0;
const common_1 = __webpack_require__(1);
const numberVO_1 = __webpack_require__(47);
class AgeVO extends numberVO_1.NumberVO {
    constructor(value) {
        super(value);
        this.validate();
    }
    validate() {
        if (!this.valuePrimitive || this.valuePrimitive < AgeVO.MIN) {
            throw new common_1.BadRequestException(`Age field cannot be empty or less than ${AgeVO.MIN} `);
        }
    }
}
exports.AgeVO = AgeVO;
AgeVO.MIN = 8;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumberVO = void 0;
const common_1 = __webpack_require__(1);
const BaseVO_1 = __webpack_require__(44);
class NumberVO extends BaseVO_1.BaseVO {
    constructor(value) {
        super();
        this.valuePrimitive = value;
        this.validate();
    }
    static create(value) {
        return new this(value);
    }
    value() {
        return this.valuePrimitive;
    }
    validate() {
        if (typeof this.valuePrimitive !== 'number') {
            throw new common_1.BadRequestException('Just are allowed number type.');
        }
    }
}
exports.NumberVO = NumberVO;


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AvatarVO = void 0;
const common_1 = __webpack_require__(1);
const stringVO_1 = __webpack_require__(43);
class AvatarVO extends stringVO_1.StringVO {
    constructor(value) {
        super(value);
        this.validate();
    }
    validate() {
        var _a;
        if (!this.valuePrimitive ||
            ((_a = this.valuePrimitive) === null || _a === void 0 ? void 0 : _a.length) > AvatarVO.MAX_LENGTH) {
            throw new common_1.BadRequestException(`Avatar field cannot be empty or longer than ${AvatarVO.MAX_LENGTH} `);
        }
    }
}
exports.AvatarVO = AvatarVO;
AvatarVO.MAX_LENGTH = 100;


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlackListVO = void 0;
const collectionVO_1 = __webpack_require__(50);
class BlackListVO extends collectionVO_1.CollectionVO {
}
exports.BlackListVO = BlackListVO;


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CollectionVO = void 0;
class CollectionVO {
    constructor(collection = []) {
        this.collection = [];
        this.total = 0;
        this.collection = collection;
        this.total = collection.length;
    }
    static create(collection = []) {
        return new this(collection);
    }
    count() {
        return this.collection.length;
    }
    items() {
        return this.collection;
    }
    addItem(item) {
        this.collection = [...this.collection, ...item];
    }
}
exports.CollectionVO = CollectionVO;


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Countries = void 0;
const common_1 = __webpack_require__(1);
let Countries = class Countries {
    constructor() {
        this.countries = ['Spain'];
    }
    findCountry(name) {
        return this.countries[name];
    }
};
Countries = __decorate([
    common_1.Injectable()
], Countries);
exports.Countries = Countries;


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailVo = void 0;
const common_1 = __webpack_require__(1);
const stringVO_1 = __webpack_require__(43);
class EmailVo extends stringVO_1.StringVO {
    constructor(value) {
        super(value);
        this.valuePrimitive = EmailVo.format(value);
        this.validate();
    }
    static create(value) {
        return new this(value);
    }
    static format(email) {
        return email.trim().toLowerCase();
    }
    validate() {
        const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
        if (!regex.test(this.valuePrimitive)) {
            throw new common_1.BadRequestException(`Email not valid. "${this.valuePrimitive}"`);
        }
    }
}
exports.EmailVo = EmailVo;


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenderVO = exports.gender = void 0;
const common_1 = __webpack_require__(1);
const stringVO_1 = __webpack_require__(43);
var gender;
(function (gender) {
    gender["MALE"] = "male";
    gender["FEMALE"] = "female";
    gender["PREFER_NOT_SAY"] = "prefer_not_say";
})(gender = exports.gender || (exports.gender = {}));
class GenderVO extends stringVO_1.StringVO {
    constructor(value) {
        super(value);
        this.validate();
    }
    validate() {
        const values = new ObjectVO(gender);
        if (!values.exists(this.valuePrimitive)) {
            throw new common_1.BadRequestException(`Gender field cannot be empty and the option are: ${Object.values(gender)
                .map((item) => item)
                .join(', ')} `);
        }
    }
}
exports.GenderVO = GenderVO;
GenderVO.MAX_LENGTH = 100;


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NameVO = void 0;
const common_1 = __webpack_require__(1);
const stringVO_1 = __webpack_require__(43);
class NameVO extends stringVO_1.StringVO {
    constructor(value) {
        super(value);
        this.valuePrimitive = value.trim();
        this.validate();
    }
    validate() {
        var _a;
        if (!this.valuePrimitive ||
            ((_a = this.valuePrimitive) === null || _a === void 0 ? void 0 : _a.length) > NameVO.MAX_LENGTH) {
            throw new common_1.BadRequestException(`Name field cannot be empty or longer than ${NameVO.MAX_LENGTH} `);
        }
    }
}
exports.NameVO = NameVO;
NameVO.MAX_LENGTH = 100;


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordVO = void 0;
const common_1 = __webpack_require__(1);
const stringVO_1 = __webpack_require__(43);
class PasswordVO extends stringVO_1.StringVO {
    constructor(value) {
        super(value);
        this.valuePrimitive = value.trim();
        this.validate();
    }
    validate() {
        var _a, _b;
        if (!this.valuePrimitive ||
            ((_a = this.valuePrimitive) === null || _a === void 0 ? void 0 : _a.length) > PasswordVO.MAX_LENGTH ||
            ((_b = this.valuePrimitive) === null || _b === void 0 ? void 0 : _b.length) < PasswordVO.MIN_LENGTH) {
            throw new common_1.BadRequestException(`Password field cannot be empty or longer than ${PasswordVO.MAX_LENGTH} `);
        }
    }
}
exports.PasswordVO = PasswordVO;
PasswordVO.MAX_LENGTH = 255;
PasswordVO.MIN_LENGTH = 8;


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesVO = void 0;
const collectionVO_1 = __webpack_require__(50);
class RolesVO extends collectionVO_1.CollectionVO {
}
exports.RolesVO = RolesVO;


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SurnameVO = void 0;
const common_1 = __webpack_require__(1);
const stringVO_1 = __webpack_require__(43);
class SurnameVO extends stringVO_1.StringVO {
    constructor(value) {
        super(value);
        this.validate();
    }
    validate() {
        var _a;
        if (!this.valuePrimitive ||
            ((_a = this.valuePrimitive) === null || _a === void 0 ? void 0 : _a.length) > SurnameVO.MAX_LENGTH) {
            throw new common_1.BadRequestException(`Surname field cannot be empty or longer than ${SurnameVO.MAX_LENGTH} `);
        }
    }
}
exports.SurnameVO = SurnameVO;
SurnameVO.MAX_LENGTH = 100;


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BooleanVO = void 0;
const common_1 = __webpack_require__(1);
const BaseVO_1 = __webpack_require__(44);
class BooleanVO extends BaseVO_1.BaseVO {
    constructor(value) {
        super();
        this.valuePrimitive = value;
        this.validate();
    }
    static create(value) {
        return new this(value);
    }
    value() {
        return this.valuePrimitive;
    }
    isTrue() {
        return this.valuePrimitive === true;
    }
    validate() {
        if (typeof this.valuePrimitive !== 'boolean') {
            throw new common_1.BadRequestException('Just are allowed boolean type.');
        }
    }
}
exports.BooleanVO = BooleanVO;


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringNullableVO = void 0;
const common_1 = __webpack_require__(1);
const BaseVO_1 = __webpack_require__(44);
class StringNullableVO extends BaseVO_1.BaseVO {
    constructor(value) {
        super();
        this.valuePrimitive = value;
    }
    static create(value) {
        return new this(value);
    }
    value() {
        return this.valuePrimitive;
    }
    validate() {
        if (typeof this.valuePrimitive !== 'string' ||
            this.valuePrimitive !== null) {
            throw new common_1.BadRequestException('Just are allowed string and null types.');
        }
    }
}
exports.StringNullableVO = StringNullableVO;


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalsService = void 0;
const common_1 = __webpack_require__(1);
const bcrypt = __webpack_require__(61);
let GlobalsService = class GlobalsService {
    static async encryptData(value) {
        return await bcrypt.hash(value, await bcrypt.genSalt());
    }
    static async compareEncryptedData(value, hash) {
        return await bcrypt.compare(value, hash);
    }
};
GlobalsService = __decorate([
    common_1.Injectable()
], GlobalsService);
exports.GlobalsService = GlobalsService;


/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDeleter = void 0;
const common_1 = __webpack_require__(1);
const guards_1 = __webpack_require__(63);
const Services_1 = __webpack_require__(28);
let UserDeleter = class UserDeleter {
    constructor(remover) {
        this.remover = remover;
    }
    remove(id) {
        return this.remover.remove(id);
    }
};
__decorate([
    common_1.UseGuards(guards_1.JwtAuthGuard),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserDeleter.prototype, "remove", null);
UserDeleter = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.UserRemover !== "undefined" && Services_1.UserRemover) === "function" ? _a : Object])
], UserDeleter);
exports.UserDeleter = UserDeleter;


/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(65);
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
};
JwtAuthGuard = __decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),
/* 65 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(65);
let LocalAuthGuard = class LocalAuthGuard extends passport_1.AuthGuard('local') {
};
LocalAuthGuard = __decorate([
    common_1.Injectable()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommandHandlers = exports.PortServices = exports.UserRepositoryPort = void 0;
__exportStar(__webpack_require__(68), exports);
var Port_1 = __webpack_require__(75);
Object.defineProperty(exports, "UserRepositoryPort", ({ enumerable: true, get: function () { return Port_1.UserRepositoryPort; } }));
exports.PortServices = __webpack_require__(28);
const UseCases_1 = __webpack_require__(68);
exports.CommandHandlers = [UseCases_1.CreateUserCommandHandler];


/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 69 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(70), exports);
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserCommand = void 0;
class CreateUserCommand {
    constructor(data) {
        this.data = data;
    }
}
exports.CreateUserCommand = CreateUserCommand;


/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserCommandHandler = void 0;
const AppCommandHandler_1 = __webpack_require__(72);
const CreateUserCommand_1 = __webpack_require__(70);
const Services_1 = __webpack_require__(28);
const User_1 = __webpack_require__(40);
const AppCommandHandlerDecorator_1 = __webpack_require__(73);
let CreateUserCommandHandler = class CreateUserCommandHandler extends AppCommandHandler_1.AppCommandHandler {
    constructor(saver) {
        super();
        this.saver = saver;
    }
    async execute(command) {
        const { data } = command;
        const user = await User_1.User.create(data);
        await this.saver.save(user.toPersistence());
    }
};
CreateUserCommandHandler = __decorate([
    AppCommandHandlerDecorator_1.AppCommandHandlerDecorator(CreateUserCommand_1.CreateUserCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.UserSaver !== "undefined" && Services_1.UserSaver) === "function" ? _a : Object])
], CreateUserCommandHandler);
exports.CreateUserCommandHandler = CreateUserCommandHandler;


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppCommandHandler = void 0;
class AppCommandHandler {
}
exports.AppCommandHandler = AppCommandHandler;


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppCommandHandlerDecorator = void 0;
const common_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(74);
const AppCommandHandlerDecorator = (commandHandler) => {
    return common_1.applyDecorators(cqrs_1.CommandHandler(commandHandler));
};
exports.AppCommandHandlerDecorator = AppCommandHandlerDecorator;


/***/ }),
/* 74 */
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");

/***/ }),
/* 75 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaUserRepository = void 0;
const AppRepositoryService_1 = __webpack_require__(77);
const User_1 = __webpack_require__(40);
class PrismaUserRepository extends AppRepositoryService_1.AppRepositoryService {
    constructor(appRepositoryService) {
        super();
        this.appRepositoryService = appRepositoryService;
    }
    async save(user) {
        var _a;
        const userObject = this.appRepositoryService.user.upsert({
            create: Object.assign({}, user),
            update: Object.assign({}, user),
            where: { id: user.id },
        });
        return (_a = User_1.User.fromObject(userObject)) === null || _a === void 0 ? void 0 : _a.id;
    }
    async findAll() {
        const users = await this.appRepositoryService.user.findMany();
        return users === null || users === void 0 ? void 0 : users.map((user) => User_1.User.fromObject(user));
    }
    async findOne(id) {
        const user = await this.appRepositoryService.user.findUnique({
            where: {
                id,
            },
        });
        return User_1.User.fromObject(user);
    }
    async findOneByEmail(email) {
        const user = await this.appRepositoryService.user.findFirst({
            where: {
                email,
            },
        });
        return User_1.User.fromObject(user);
    }
    async remove(id) {
        await this.appRepositoryService.user.delete({
            where: {
                id,
            },
        });
    }
}
exports.PrismaUserRepository = PrismaUserRepository;


/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppRepositoryService = void 0;
const prisma_service_1 = __webpack_require__(13);
class AppRepositoryService extends prisma_service_1.PrismaService {
}
exports.AppRepositoryService = AppRepositoryService;


/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(1);
const services = __webpack_require__(79);
const auth_controller_1 = __webpack_require__(84);
const strategies = __webpack_require__(86);
const guards = __webpack_require__(63);
const jwt_1 = __webpack_require__(81);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.SIGN,
                signOptions: { expiresIn: '1200s' },
            }),
            common_1.CacheModule.register(),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            ...Object.values(services),
            ...Object.values(strategies),
            ...Object.values(guards),
        ],
        exports: [...Object.values(services)],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(80), exports);
__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(81);
const prisma_service_1 = __webpack_require__(13);
const globals_service_1 = __webpack_require__(60);
const _ = __webpack_require__(21);
let AuthService = class AuthService {
    constructor(jwtService, prismaService, globalsService) {
        this.jwtService = jwtService;
        this.prismaService = prismaService;
        this.globalsService = globalsService;
    }
    googleLogin(req) {
        if (!req.user) {
            return 'No user from google';
        }
        return {
            message: 'User information from google',
            user: req.user,
        };
    }
    async jwtCreateAndRefresh(user, ctx) {
        return {
            accessToken: this.jwtService.sign(Object.assign({ id: user.id, email: user.email, password: user.password }, ctx)),
        };
    }
    async checkData(jwt, ctx) {
        const check = _.isEqual(await this.jwtGetCheckType(jwt), await this.reqGetCheckType(ctx));
        if (!check) {
            throw new common_1.UnauthorizedException('Access forbidden');
        }
    }
    async reqGetCheckType(req) {
        return {
            ip: req.ip,
            hostname: req.hostname,
            userAgent: req.userAgent,
        };
    }
    async jwtGetCheckType(jwt) {
        return {
            ip: jwt.ip,
            hostname: jwt.hostname,
            userAgent: jwt.userAgent,
        };
    }
    async validateLogin(passwordPlain, passwordHashed) {
        return await globals_service_1.GlobalsService.compareEncryptedData(passwordPlain, passwordHashed);
    }
    async authFindUserByEmail(email) {
        return await this.prismaService.user.findFirst({
            where: { email },
        });
    }
    async authCheckSameUser(req, requestId) {
        const dbUser = await this.prismaService.user.findFirst({
            where: {
                id: req.user.id,
                email: req.user.email,
            },
        });
        if ((dbUser === null || dbUser === void 0 ? void 0 : dbUser.id) !== requestId) {
            throw new common_1.BadRequestException('Bad Request');
        }
        return dbUser;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof globals_service_1.GlobalsService !== "undefined" && globals_service_1.GlobalsService) === "function" ? _c : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 81 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CacheService = void 0;
const common_1 = __webpack_require__(1);
const cache_manager_1 = __webpack_require__(83);
let CacheService = class CacheService {
    constructor(cacheManager) {
        this.cacheManager = cacheManager;
    }
    async setJwtCache(data, token) {
        await this.cacheManager.set(`${data.email}-${data.ip}`, token, {
            ttl: 1200,
        });
    }
    async getJwtCache(data) {
        return await this.cacheManager.get(`${data.email}-${data.ip}`);
    }
};
CacheService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _a : Object])
], CacheService);
exports.CacheService = CacheService;


/***/ }),
/* 83 */
/***/ ((module) => {

module.exports = require("cache-manager");

/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(79);
const passport_1 = __webpack_require__(65);
const guards_1 = __webpack_require__(63);
const decorators_1 = __webpack_require__(18);
const util_1 = __webpack_require__(22);
const userDto_1 = __webpack_require__(85);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async googleAuth(req) { }
    googleAuthRedirect(req) {
        console.log('message', req.message, 'user:', req.user);
        return this.authService.googleLogin(req);
    }
    async login(req, ctx) {
        console.warn(`Login: user: ${JSON.stringify(req.user)} | ctx: ${JSON.stringify(ctx)}`);
        return Object.assign(Object.assign({}, (await this.authService.jwtCreateAndRefresh(req.user, ctx))), { id: new userDto_1.UserDto(req.user).id });
    }
};
__decorate([
    common_1.Get('google'),
    common_1.UseGuards(passport_1.AuthGuard('google')),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    common_1.Get('google/callback'),
    common_1.UseGuards(passport_1.AuthGuard('google')),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    common_1.UseGuards(guards_1.LocalAuthGuard),
    common_1.Post('login'),
    __param(0, common_1.Req()),
    __param(1, decorators_1.RequestDetails()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof util_1.IRequestDetail !== "undefined" && util_1.IRequestDetail) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [typeof (_b = typeof services_1.AuthService !== "undefined" && services_1.AuthService) === "function" ? _b : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
class UserDto {
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.surname = props.surname;
        this.email = props.email;
        this.age = props === null || props === void 0 ? void 0 : props.age;
        this.description = props === null || props === void 0 ? void 0 : props.description;
        this.gender = (props === null || props === void 0 ? void 0 : props.gender) && props.gen();
        this.country = props === null || props === void 0 ? void 0 : props.country;
        this.nativeLanguages = props === null || props === void 0 ? void 0 : props.nativeLanguages;
        this.learningLanguages = props === null || props === void 0 ? void 0 : props.learningLanguages;
    }
}
exports.UserDto = UserDto;


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(87), exports);
__exportStar(__webpack_require__(90), exports);
__exportStar(__webpack_require__(92), exports);


/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleStrategy = void 0;
const passport_1 = __webpack_require__(65);
const passport_google_oauth20_1 = __webpack_require__(88);
const dotenv_1 = __webpack_require__(89);
const common_1 = __webpack_require__(1);
dotenv_1.config();
let GoogleStrategy = class GoogleStrategy extends passport_1.PassportStrategy(passport_google_oauth20_1.Strategy, 'google') {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: 'http://localhost:3500/google/callback',
            scope: ['email', 'profile'],
        });
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { name, emails } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            accessToken,
        };
        done(null, user);
    }
};
GoogleStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], GoogleStrategy);
exports.GoogleStrategy = GoogleStrategy;


/***/ }),
/* 88 */
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),
/* 89 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(65);
const passport_jwt_1 = __webpack_require__(91);
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SIGN,
        });
    }
    async validate(payload) {
        return Object.assign({}, payload);
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),
/* 91 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(65);
const passport_local_1 = __webpack_require__(93);
const services_1 = __webpack_require__(79);
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'email', passwordField: 'password' });
        this.authService = authService;
    }
    async validate(email, password) {
        const user = await this.authService.authFindUserByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Email y/o password not valid. ');
        }
        if (!(await this.authService.validateLogin(password, user.password))) {
            throw new common_1.UnauthorizedException('Email y/o password not valid.');
        }
        return user;
    }
};
LocalStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof services_1.AuthService !== "undefined" && services_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),
/* 93 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalsModule = void 0;
const common_1 = __webpack_require__(1);
const globals_service_1 = __webpack_require__(60);
const globals_controller_1 = __webpack_require__(95);
let GlobalsModule = class GlobalsModule {
};
GlobalsModule = __decorate([
    common_1.Global(),
    common_1.Module({
        controllers: [globals_controller_1.GlobalsController],
        providers: [globals_service_1.GlobalsService],
        exports: [globals_service_1.GlobalsService],
    })
], GlobalsModule);
exports.GlobalsModule = GlobalsModule;


/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalsController = void 0;
const common_1 = __webpack_require__(1);
const globals_service_1 = __webpack_require__(60);
let GlobalsController = class GlobalsController {
    constructor(globalsService) {
        this.globalsService = globalsService;
    }
};
GlobalsController = __decorate([
    common_1.Controller('globals'),
    __metadata("design:paramtypes", [typeof (_a = typeof globals_service_1.GlobalsService !== "undefined" && globals_service_1.GlobalsService) === "function" ? _a : Object])
], GlobalsController);
exports.GlobalsController = GlobalsController;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const path_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.enableCors();
    await app.startAllMicroservices();
    await app.listen(3500);
}
bootstrap();

})();

/******/ })()
;