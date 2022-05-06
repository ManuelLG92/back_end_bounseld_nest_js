/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    root() {
        return { message: 'Hello world!' };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const app_gateway_module_1 = __webpack_require__(/*! ./gateway/app.gateway.module */ "./src/gateway/app.gateway.module.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./src/user/user.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const globals_module_1 = __webpack_require__(/*! ./globals/globals.module */ "./src/globals/globals.module.ts");
const native_languages_module_1 = __webpack_require__(/*! ./native-languages/native-languages.module */ "./src/native-languages/native-languages.module.ts");
const learning_languages_module_1 = __webpack_require__(/*! ./learning-lenguages/learning-languages.module */ "./src/learning-lenguages/learning-languages.module.ts");
const language_module_1 = __webpack_require__(/*! ./lenguage/language.module */ "./src/lenguage/language.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            globals_module_1.GlobalsModule,
            app_gateway_module_1.AppGatewayModule,
            prisma_module_1.PrismaModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            native_languages_module_1.NativeLanguagesModule,
            learning_languages_module_1.LearningLanguagesModule,
            language_module_1.LanguageModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const services_1 = __webpack_require__(/*! ./services */ "./src/auth/services/index.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const guards_1 = __webpack_require__(/*! ./guards */ "./src/auth/guards/index.ts");
const decorators_1 = __webpack_require__(/*! ../decorators */ "./src/decorators/index.ts");
const Util_1 = __webpack_require__(/*! ../shared/Util */ "./src/shared/Util/index.ts");
const userDto_1 = __webpack_require__(/*! ../user/dto/userDto */ "./src/user/dto/userDto.ts");
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
    (0, common_1.Get)('google'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('google/callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, decorators_1.RequestDetails)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof Util_1.IRequestDetail !== "undefined" && Util_1.IRequestDetail) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_b = typeof services_1.AuthService !== "undefined" && services_1.AuthService) === "function" ? _b : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const services = __webpack_require__(/*! ./services */ "./src/auth/services/index.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
const strategies = __webpack_require__(/*! ./strategies */ "./src/auth/strategies/index.ts");
const guards = __webpack_require__(/*! ./guards */ "./src/auth/guards/index.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
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

/***/ "./src/auth/guards/index.ts":
/*!**********************************!*\
  !*** ./src/auth/guards/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt.guard */ "./src/auth/guards/jwt.guard.ts"), exports);
__exportStar(__webpack_require__(/*! ./local.guard */ "./src/auth/guards/local.guard.ts"), exports);


/***/ }),

/***/ "./src/auth/guards/jwt.guard.ts":
/*!**************************************!*\
  !*** ./src/auth/guards/jwt.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./src/auth/guards/local.guard.ts":
/*!****************************************!*\
  !*** ./src/auth/guards/local.guard.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./src/auth/services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/auth/services/auth.service.ts ***!
  \*******************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const globals_service_1 = __webpack_require__(/*! ../../globals/globals.service */ "./src/globals/globals.service.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
let AuthService = class AuthService {
    constructor(jwtService, prismaService) {
        this.jwtService = jwtService;
        this.prismaService = prismaService;
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
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/auth/services/cache.service.ts":
/*!********************************************!*\
  !*** ./src/auth/services/cache.service.ts ***!
  \********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cache_manager_1 = __webpack_require__(/*! cache-manager */ "cache-manager");
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
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _a : Object])
], CacheService);
exports.CacheService = CacheService;


/***/ }),

/***/ "./src/auth/services/index.ts":
/*!************************************!*\
  !*** ./src/auth/services/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.service */ "./src/auth/services/auth.service.ts"), exports);
__exportStar(__webpack_require__(/*! ./cache.service */ "./src/auth/services/cache.service.ts"), exports);


/***/ }),

/***/ "./src/auth/strategies/google.strategy.ts":
/*!************************************************!*\
  !*** ./src/auth/strategies/google.strategy.ts ***!
  \************************************************/
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
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_google_oauth20_1 = __webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20");
const dotenv_1 = __webpack_require__(/*! dotenv */ "dotenv");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
(0, dotenv_1.config)();
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
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
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GoogleStrategy);
exports.GoogleStrategy = GoogleStrategy;


/***/ }),

/***/ "./src/auth/strategies/index.ts":
/*!**************************************!*\
  !*** ./src/auth/strategies/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./google.strategy */ "./src/auth/strategies/google.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./jwt.strategy */ "./src/auth/strategies/jwt.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./local.strategy */ "./src/auth/strategies/local.strategy.ts"), exports);


/***/ }),

/***/ "./src/auth/strategies/jwt.strategy.ts":
/*!*********************************************!*\
  !*** ./src/auth/strategies/jwt.strategy.ts ***!
  \*********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
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
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./src/auth/strategies/local.strategy.ts":
/*!***********************************************!*\
  !*** ./src/auth/strategies/local.strategy.ts ***!
  \***********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const services_1 = __webpack_require__(/*! ../services */ "./src/auth/services/index.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
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
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof services_1.AuthService !== "undefined" && services_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./src/decorators/auth.ts":
/*!********************************!*\
  !*** ./src/decorators/auth.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkData = exports.Auth = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const _ = __webpack_require__(/*! lodash */ "lodash");
exports.Auth = (0, common_1.createParamDecorator)((_data, context) => {
    (0, exports.checkData)(context.switchToHttp().getRequest());
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

/***/ "./src/decorators/index.ts":
/*!*********************************!*\
  !*** ./src/decorators/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./request */ "./src/decorators/request.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth */ "./src/decorators/auth.ts"), exports);


/***/ }),

/***/ "./src/decorators/request.ts":
/*!***********************************!*\
  !*** ./src/decorators/request.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseRequestDetails = exports.RequestDetails = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.RequestDetails = (0, common_1.createParamDecorator)((_data, context) => {
    return (0, exports.parseRequestDetails)(context.switchToHttp().getRequest());
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

/***/ "./src/gateway/app.gateway.module.ts":
/*!*******************************************!*\
  !*** ./src/gateway/app.gateway.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppGatewayModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_gateway_1 = __webpack_require__(/*! ./app.gateway */ "./src/gateway/app.gateway.ts");
const app_gateway_service_1 = __webpack_require__(/*! ./app.gateway.service */ "./src/gateway/app.gateway.service.ts");
let AppGatewayModule = class AppGatewayModule {
};
AppGatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [app_gateway_1.AppGateway, app_gateway_service_1.AppGatewayService],
    })
], AppGatewayModule);
exports.AppGatewayModule = AppGatewayModule;


/***/ }),

/***/ "./src/gateway/app.gateway.service.ts":
/*!********************************************!*\
  !*** ./src/gateway/app.gateway.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppGatewayService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
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
    (0, common_1.Injectable)()
], AppGatewayService);
exports.AppGatewayService = AppGatewayService;


/***/ }),

/***/ "./src/gateway/app.gateway.ts":
/*!************************************!*\
  !*** ./src/gateway/app.gateway.ts ***!
  \************************************/
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
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
const app_gateway_service_1 = __webpack_require__(/*! ./app.gateway.service */ "./src/gateway/app.gateway.service.ts");
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
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], AppGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('messageToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object, String]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleMessageBroadCast", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('messageToChat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object, String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AppGateway.prototype, "handleMessageBroadCastToChat", null);
AppGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3005, { cors: true }),
    __metadata("design:paramtypes", [typeof (_e = typeof app_gateway_service_1.AppGatewayService !== "undefined" && app_gateway_service_1.AppGatewayService) === "function" ? _e : Object])
], AppGateway);
exports.AppGateway = AppGateway;
async function getValueFromQuery(client, queryName) {
    return (await client.handshake.query[queryName]);
}


/***/ }),

/***/ "./src/globals/globals.controller.ts":
/*!*******************************************!*\
  !*** ./src/globals/globals.controller.ts ***!
  \*******************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const globals_service_1 = __webpack_require__(/*! ./globals.service */ "./src/globals/globals.service.ts");
let GlobalsController = class GlobalsController {
    constructor(globalsService) {
        this.globalsService = globalsService;
    }
};
GlobalsController = __decorate([
    (0, common_1.Controller)('globals'),
    __metadata("design:paramtypes", [typeof (_a = typeof globals_service_1.GlobalsService !== "undefined" && globals_service_1.GlobalsService) === "function" ? _a : Object])
], GlobalsController);
exports.GlobalsController = GlobalsController;


/***/ }),

/***/ "./src/globals/globals.module.ts":
/*!***************************************!*\
  !*** ./src/globals/globals.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const globals_service_1 = __webpack_require__(/*! ./globals.service */ "./src/globals/globals.service.ts");
const globals_controller_1 = __webpack_require__(/*! ./globals.controller */ "./src/globals/globals.controller.ts");
let GlobalsModule = class GlobalsModule {
};
GlobalsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [globals_controller_1.GlobalsController],
        providers: [globals_service_1.GlobalsService],
        exports: [globals_service_1.GlobalsService],
    })
], GlobalsModule);
exports.GlobalsModule = GlobalsModule;


/***/ }),

/***/ "./src/globals/globals.service.ts":
/*!****************************************!*\
  !*** ./src/globals/globals.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
let GlobalsService = class GlobalsService {
    static async encryptData(value) {
        return await bcrypt.hash(value, await bcrypt.genSalt());
    }
    static async compareEncryptedData(value, hash) {
        return await bcrypt.compare(value, hash);
    }
};
GlobalsService = __decorate([
    (0, common_1.Injectable)()
], GlobalsService);
exports.GlobalsService = GlobalsService;


/***/ }),

/***/ "./src/learning-lenguages/dto/create-learning-language.dto.ts":
/*!********************************************************************!*\
  !*** ./src/learning-lenguages/dto/create-learning-language.dto.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateLearningLanguageDto = void 0;
class CreateLearningLanguageDto {
}
exports.CreateLearningLanguageDto = CreateLearningLanguageDto;


/***/ }),

/***/ "./src/learning-lenguages/dto/update-learning-language.dto.ts":
/*!********************************************************************!*\
  !*** ./src/learning-lenguages/dto/update-learning-language.dto.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateLearningLanguageDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_learning_language_dto_1 = __webpack_require__(/*! ./create-learning-language.dto */ "./src/learning-lenguages/dto/create-learning-language.dto.ts");
class UpdateLearningLanguageDto extends (0, mapped_types_1.PartialType)(create_learning_language_dto_1.CreateLearningLanguageDto) {
}
exports.UpdateLearningLanguageDto = UpdateLearningLanguageDto;


/***/ }),

/***/ "./src/learning-lenguages/learning-laguages.controller.ts":
/*!****************************************************************!*\
  !*** ./src/learning-lenguages/learning-laguages.controller.ts ***!
  \****************************************************************/
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
exports.LearningLaguagesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const learning_languages_service_1 = __webpack_require__(/*! ./learning-languages.service */ "./src/learning-lenguages/learning-languages.service.ts");
const create_learning_language_dto_1 = __webpack_require__(/*! ./dto/create-learning-language.dto */ "./src/learning-lenguages/dto/create-learning-language.dto.ts");
const update_learning_language_dto_1 = __webpack_require__(/*! ./dto/update-learning-language.dto */ "./src/learning-lenguages/dto/update-learning-language.dto.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const Infrastructure_1 = __webpack_require__(/*! ../shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
const EventConstants_1 = __webpack_require__(/*! ../shared/Domain/Constants/Events/EventConstants */ "./src/shared/Domain/Constants/Events/EventConstants.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let LearningLaguagesController = class LearningLaguagesController {
    constructor(learningLanguagesService, client) {
        this.learningLanguagesService = learningLanguagesService;
        this.client = client;
    }
    async onModuleInit() {
        await this.client.connect();
    }
    create(createLearningLanguageDto) {
        return this.learningLanguagesService.create(createLearningLanguageDto);
    }
    findAll() {
        return this.learningLanguagesService.findAll();
    }
    async findOne(code) {
        console.log('code', code);
        return await (0, rxjs_1.lastValueFrom)(this.client.send(EventConstants_1.default.messagePatterns.language.findByCode, code));
    }
    update(id, updateLearningLanguageDto) {
        return this.learningLanguagesService.update(+id, updateLearningLanguageDto);
    }
    remove(id) {
        return this.learningLanguagesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_learning_language_dto_1.CreateLearningLanguageDto !== "undefined" && create_learning_language_dto_1.CreateLearningLanguageDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], LearningLaguagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LearningLaguagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LearningLaguagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof update_learning_language_dto_1.UpdateLearningLanguageDto !== "undefined" && update_learning_language_dto_1.UpdateLearningLanguageDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], LearningLaguagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LearningLaguagesController.prototype, "remove", null);
LearningLaguagesController = __decorate([
    (0, common_1.Controller)('learning-lenguages'),
    __param(1, (0, common_1.Inject)(Infrastructure_1.QueueConstants.LEARNING_LANGUAGE_CLIENT)),
    __metadata("design:paramtypes", [typeof (_c = typeof learning_languages_service_1.LearningLanguagesService !== "undefined" && learning_languages_service_1.LearningLanguagesService) === "function" ? _c : Object, typeof (_d = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _d : Object])
], LearningLaguagesController);
exports.LearningLaguagesController = LearningLaguagesController;


/***/ }),

/***/ "./src/learning-lenguages/learning-languages.module.ts":
/*!*************************************************************!*\
  !*** ./src/learning-lenguages/learning-languages.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LearningLanguagesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const learning_languages_service_1 = __webpack_require__(/*! ./learning-languages.service */ "./src/learning-lenguages/learning-languages.service.ts");
const learning_laguages_controller_1 = __webpack_require__(/*! ./learning-laguages.controller */ "./src/learning-lenguages/learning-laguages.controller.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const Infrastructure_1 = __webpack_require__(/*! ../shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
let LearningLanguagesModule = class LearningLanguagesModule {
};
LearningLanguagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: Infrastructure_1.QueueConstants.LEARNING_LANGUAGE_CLIENT,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [Infrastructure_1.QueueConstants.URL],
                        queue: Infrastructure_1.QueueConstants.MAIN_QUEUE,
                        queueOptions: {
                            durable: false,
                        },
                    },
                },
            ]),
            cqrs_1.CqrsModule,
        ],
        controllers: [learning_laguages_controller_1.LearningLaguagesController],
        providers: [learning_languages_service_1.LearningLanguagesService],
    })
], LearningLanguagesModule);
exports.LearningLanguagesModule = LearningLanguagesModule;


/***/ }),

/***/ "./src/learning-lenguages/learning-languages.service.ts":
/*!**************************************************************!*\
  !*** ./src/learning-lenguages/learning-languages.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LearningLanguagesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let LearningLanguagesService = class LearningLanguagesService {
    create(createLearningLenguageDto) {
        return 'This action adds a new learningLenguage';
    }
    findAll() {
        return `This action returns all learningLenguages`;
    }
    findOne(id) {
        return `This action returns a #${id} learningLenguage`;
    }
    update(id, updateLearningLenguageDto) {
        return `This action updates a #${id} learningLenguage`;
    }
    remove(id) {
        return `This action removes a #${id} learningLenguage`;
    }
};
LearningLanguagesService = __decorate([
    (0, common_1.Injectable)()
], LearningLanguagesService);
exports.LearningLanguagesService = LearningLanguagesService;


/***/ }),

/***/ "./src/lenguage/Application/Port/LanguageRepositoryPort.ts":
/*!*****************************************************************!*\
  !*** ./src/lenguage/Application/Port/LanguageRepositoryPort.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguageRepositoryPort = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let LanguageRepositoryPort = class LanguageRepositoryPort {
};
LanguageRepositoryPort = __decorate([
    (0, common_1.Injectable)()
], LanguageRepositoryPort);
exports.LanguageRepositoryPort = LanguageRepositoryPort;


/***/ }),

/***/ "./src/lenguage/Application/Port/Services/LanguageFinder.ts":
/*!******************************************************************!*\
  !*** ./src/lenguage/Application/Port/Services/LanguageFinder.ts ***!
  \******************************************************************/
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
exports.LanguageFinder = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const LanguageRepositoryPort_1 = __webpack_require__(/*! ../LanguageRepositoryPort */ "./src/lenguage/Application/Port/LanguageRepositoryPort.ts");
const Infrastructure_1 = __webpack_require__(/*! ../../../../shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
let LanguageFinder = class LanguageFinder {
    constructor(languageRepositoryPort) {
        this.languageRepositoryPort = languageRepositoryPort;
    }
    async find(code) {
        return await this.languageRepositoryPort.findOne(code);
    }
    async findAll() {
        return await this.languageRepositoryPort.findAll();
    }
};
LanguageFinder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(Infrastructure_1.RepositoryProviders.LANGUAGE_REPOSITORY)),
    __metadata("design:paramtypes", [typeof (_a = typeof LanguageRepositoryPort_1.LanguageRepositoryPort !== "undefined" && LanguageRepositoryPort_1.LanguageRepositoryPort) === "function" ? _a : Object])
], LanguageFinder);
exports.LanguageFinder = LanguageFinder;


/***/ }),

/***/ "./src/lenguage/Application/Port/Services/index.ts":
/*!*********************************************************!*\
  !*** ./src/lenguage/Application/Port/Services/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./LanguageFinder */ "./src/lenguage/Application/Port/Services/LanguageFinder.ts"), exports);


/***/ }),

/***/ "./src/lenguage/Application/Port/index.ts":
/*!************************************************!*\
  !*** ./src/lenguage/Application/Port/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./LanguageRepositoryPort */ "./src/lenguage/Application/Port/LanguageRepositoryPort.ts"), exports);


/***/ }),

/***/ "./src/lenguage/Application/UseCases/GetOne/GetLanguageHandler.ts":
/*!************************************************************************!*\
  !*** ./src/lenguage/Application/UseCases/GetOne/GetLanguageHandler.ts ***!
  \************************************************************************/
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
exports.GetLanguageHandler = void 0;
const Application_1 = __webpack_require__(/*! ../../../../shared/Application */ "./src/shared/Application/index.ts");
const GetLanguageQuery_1 = __webpack_require__(/*! ./GetLanguageQuery */ "./src/lenguage/Application/UseCases/GetOne/GetLanguageQuery.ts");
const Services_1 = __webpack_require__(/*! ../../Port/Services */ "./src/lenguage/Application/Port/Services/index.ts");
const language_1 = __webpack_require__(/*! ../../../Domain/language */ "./src/lenguage/Domain/language.ts");
let GetLanguageHandler = class GetLanguageHandler extends Application_1.AppQueryHandler {
    constructor(finder) {
        super();
        this.finder = finder;
    }
    async execute(command) {
        const { code } = command;
        const language = await this.finder.find(code);
        return language_1.Language.fromObject(language);
    }
};
GetLanguageHandler = __decorate([
    (0, Application_1.AppQueryHandlerDecorator)(GetLanguageQuery_1.GetLanguageQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.LanguageFinder !== "undefined" && Services_1.LanguageFinder) === "function" ? _a : Object])
], GetLanguageHandler);
exports.GetLanguageHandler = GetLanguageHandler;


/***/ }),

/***/ "./src/lenguage/Application/UseCases/GetOne/GetLanguageQuery.ts":
/*!**********************************************************************!*\
  !*** ./src/lenguage/Application/UseCases/GetOne/GetLanguageQuery.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetLanguageQuery = void 0;
class GetLanguageQuery {
    constructor(code) {
        this.code = code;
    }
}
exports.GetLanguageQuery = GetLanguageQuery;


/***/ }),

/***/ "./src/lenguage/Application/UseCases/GetOne/index.ts":
/*!***********************************************************!*\
  !*** ./src/lenguage/Application/UseCases/GetOne/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./GetLanguageHandler */ "./src/lenguage/Application/UseCases/GetOne/GetLanguageHandler.ts"), exports);
__exportStar(__webpack_require__(/*! ./GetLanguageQuery */ "./src/lenguage/Application/UseCases/GetOne/GetLanguageQuery.ts"), exports);


/***/ }),

/***/ "./src/lenguage/Application/UseCases/index.ts":
/*!****************************************************!*\
  !*** ./src/lenguage/Application/UseCases/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./GetOne */ "./src/lenguage/Application/UseCases/GetOne/index.ts"), exports);


/***/ }),

/***/ "./src/lenguage/Application/index.ts":
/*!*******************************************!*\
  !*** ./src/lenguage/Application/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryHandlers = exports.LanguagePortServices = exports.LanguageRepositoryPort = void 0;
__exportStar(__webpack_require__(/*! ./UseCases */ "./src/lenguage/Application/UseCases/index.ts"), exports);
var Port_1 = __webpack_require__(/*! ./Port */ "./src/lenguage/Application/Port/index.ts");
Object.defineProperty(exports, "LanguageRepositoryPort", ({ enumerable: true, get: function () { return Port_1.LanguageRepositoryPort; } }));
exports.LanguagePortServices = __webpack_require__(/*! ./Port/Services */ "./src/lenguage/Application/Port/Services/index.ts");
const UseCases_1 = __webpack_require__(/*! ./UseCases */ "./src/lenguage/Application/UseCases/index.ts");
exports.QueryHandlers = [UseCases_1.GetLanguageHandler];


/***/ }),

/***/ "./src/lenguage/Domain/language.ts":
/*!*****************************************!*\
  !*** ./src/lenguage/Domain/language.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Language = void 0;
class Language {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
    static fromObject(props) {
        return {
            code: props.code,
            name: props.name,
        };
    }
}
exports.Language = Language;


/***/ }),

/***/ "./src/lenguage/Infrastructure/Repository/PrismaLanguageRepository.ts":
/*!****************************************************************************!*\
  !*** ./src/lenguage/Infrastructure/Repository/PrismaLanguageRepository.ts ***!
  \****************************************************************************/
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
exports.PrismaLanguageRepository = void 0;
const language_1 = __webpack_require__(/*! ../../Domain/language */ "./src/lenguage/Domain/language.ts");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let PrismaLanguageRepository = class PrismaLanguageRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        const languages = await this.prismaService.languages.findMany();
        return languages.map((item) => language_1.Language.fromObject(item));
    }
    async findOne(code) {
        const language = await this.prismaService.languages.findFirst({
            where: { code },
        });
        if (!language) {
            throw new microservices_1.RpcException(`Language not found by code ${code}`);
        }
        return language_1.Language.fromObject(language);
    }
};
PrismaLanguageRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PrismaLanguageRepository);
exports.PrismaLanguageRepository = PrismaLanguageRepository;


/***/ }),

/***/ "./src/lenguage/controllers/Event/FindByCodeEventController.ts":
/*!*********************************************************************!*\
  !*** ./src/lenguage/controllers/Event/FindByCodeEventController.ts ***!
  \*********************************************************************/
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindByCodeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const EventConstants_1 = __webpack_require__(/*! src/shared/Domain/Constants/Events/EventConstants */ "./src/shared/Domain/Constants/Events/EventConstants.ts");
const Application_1 = __webpack_require__(/*! ../../Application */ "./src/lenguage/Application/index.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
let FindByCodeController = class FindByCodeController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async getLanguageByCode(code, context) {
        console.log(`Code: ${code}. Pattern: ${context.getPattern()})}`);
        const language = await this.queryBus.execute(new Application_1.GetLanguageQuery(code));
        console.log(language);
        return language;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)(EventConstants_1.default.messagePatterns.language.findByCode),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof microservices_1.RmqContext !== "undefined" && microservices_1.RmqContext) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], FindByCodeController.prototype, "getLanguageByCode", null);
FindByCodeController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_b = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _b : Object, typeof (_c = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _c : Object])
], FindByCodeController);
exports.FindByCodeController = FindByCodeController;


/***/ }),

/***/ "./src/lenguage/controllers/Event/index.ts":
/*!*************************************************!*\
  !*** ./src/lenguage/controllers/Event/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./FindByCodeEventController */ "./src/lenguage/controllers/Event/FindByCodeEventController.ts"), exports);


/***/ }),

/***/ "./src/lenguage/controllers/Rest/FindByCodeController.ts":
/*!***************************************************************!*\
  !*** ./src/lenguage/controllers/Rest/FindByCodeController.ts ***!
  \***************************************************************/
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
exports.FindByCodeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Services_1 = __webpack_require__(/*! ../../Application/Port/Services */ "./src/lenguage/Application/Port/Services/index.ts");
let FindByCodeController = class FindByCodeController {
    constructor(finder) {
        this.finder = finder;
    }
    findOne(code) {
        return this.finder.find(code);
    }
    findAll() {
        return this.finder.findAll();
    }
};
__decorate([
    (0, common_1.Get)(':code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FindByCodeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FindByCodeController.prototype, "findAll", null);
FindByCodeController = __decorate([
    (0, common_1.Controller)('languages'),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.LanguageFinder !== "undefined" && Services_1.LanguageFinder) === "function" ? _a : Object])
], FindByCodeController);
exports.FindByCodeController = FindByCodeController;


/***/ }),

/***/ "./src/lenguage/controllers/Rest/index.ts":
/*!************************************************!*\
  !*** ./src/lenguage/controllers/Rest/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./FindByCodeController */ "./src/lenguage/controllers/Rest/FindByCodeController.ts"), exports);


/***/ }),

/***/ "./src/lenguage/language.module.ts":
/*!*****************************************!*\
  !*** ./src/lenguage/language.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguageModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const Application_1 = __webpack_require__(/*! ./Application */ "./src/lenguage/Application/index.ts");
const PrismaLanguageRepository_1 = __webpack_require__(/*! ./Infrastructure/Repository/PrismaLanguageRepository */ "./src/lenguage/Infrastructure/Repository/PrismaLanguageRepository.ts");
const RestControllers = __webpack_require__(/*! ./controllers/Rest */ "./src/lenguage/controllers/Rest/index.ts");
const EventControllers = __webpack_require__(/*! ./controllers/Event */ "./src/lenguage/controllers/Event/index.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const Infrastructure_1 = __webpack_require__(/*! ../shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
let LanguageModule = class LanguageModule {
};
LanguageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: Infrastructure_1.QueueConstants.LANGUAGE_CLIENT,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [Infrastructure_1.QueueConstants.URL],
                        queue: Infrastructure_1.QueueConstants.MAIN_QUEUE,
                        queueOptions: {
                            durable: false,
                        },
                    },
                },
            ]),
            cqrs_1.CqrsModule,
            prisma_module_1.PrismaModule,
        ],
        controllers: [
            ...Object.values(RestControllers),
            ...Object.values(EventControllers),
        ],
        providers: [
            ...Object.values(Application_1.QueryHandlers),
            ...Object.values(Application_1.LanguagePortServices),
            {
                provide: Infrastructure_1.RepositoryProviders.LANGUAGE_REPOSITORY,
                useClass: PrismaLanguageRepository_1.PrismaLanguageRepository,
            },
        ],
    })
], LanguageModule);
exports.LanguageModule = LanguageModule;


/***/ }),

/***/ "./src/native-languages/dto/create-native-language.dto.ts":
/*!****************************************************************!*\
  !*** ./src/native-languages/dto/create-native-language.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateNativeLanguageDto = void 0;
class CreateNativeLanguageDto {
}
exports.CreateNativeLanguageDto = CreateNativeLanguageDto;


/***/ }),

/***/ "./src/native-languages/dto/update-native-language.dto.ts":
/*!****************************************************************!*\
  !*** ./src/native-languages/dto/update-native-language.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateNativeLanguageDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_native_language_dto_1 = __webpack_require__(/*! ./create-native-language.dto */ "./src/native-languages/dto/create-native-language.dto.ts");
class UpdateNativeLanguageDto extends (0, mapped_types_1.PartialType)(create_native_language_dto_1.CreateNativeLanguageDto) {
}
exports.UpdateNativeLanguageDto = UpdateNativeLanguageDto;


/***/ }),

/***/ "./src/native-languages/native-languages.controller.ts":
/*!*************************************************************!*\
  !*** ./src/native-languages/native-languages.controller.ts ***!
  \*************************************************************/
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NativeLanguagesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const native_languages_service_1 = __webpack_require__(/*! ./native-languages.service */ "./src/native-languages/native-languages.service.ts");
const create_native_language_dto_1 = __webpack_require__(/*! ./dto/create-native-language.dto */ "./src/native-languages/dto/create-native-language.dto.ts");
const update_native_language_dto_1 = __webpack_require__(/*! ./dto/update-native-language.dto */ "./src/native-languages/dto/update-native-language.dto.ts");
let NativeLanguagesController = class NativeLanguagesController {
    constructor(nativeLanguagesService) {
        this.nativeLanguagesService = nativeLanguagesService;
    }
    create(createNativeLanguageDto) {
        return this.nativeLanguagesService.create(createNativeLanguageDto);
    }
    findAll() {
        return this.nativeLanguagesService.findAll();
    }
    findOne(id) {
        return this.nativeLanguagesService.findOne(+id);
    }
    update(id, updateNativeLanguageDto) {
        return this.nativeLanguagesService.update(+id, updateNativeLanguageDto);
    }
    remove(id) {
        return this.nativeLanguagesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_native_language_dto_1.CreateNativeLanguageDto !== "undefined" && create_native_language_dto_1.CreateNativeLanguageDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], NativeLanguagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NativeLanguagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NativeLanguagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof update_native_language_dto_1.UpdateNativeLanguageDto !== "undefined" && update_native_language_dto_1.UpdateNativeLanguageDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], NativeLanguagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NativeLanguagesController.prototype, "remove", null);
NativeLanguagesController = __decorate([
    (0, common_1.Controller)('native-languages'),
    __metadata("design:paramtypes", [typeof (_c = typeof native_languages_service_1.NativeLanguagesService !== "undefined" && native_languages_service_1.NativeLanguagesService) === "function" ? _c : Object])
], NativeLanguagesController);
exports.NativeLanguagesController = NativeLanguagesController;


/***/ }),

/***/ "./src/native-languages/native-languages.module.ts":
/*!*********************************************************!*\
  !*** ./src/native-languages/native-languages.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NativeLanguagesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const native_languages_service_1 = __webpack_require__(/*! ./native-languages.service */ "./src/native-languages/native-languages.service.ts");
const native_languages_controller_1 = __webpack_require__(/*! ./native-languages.controller */ "./src/native-languages/native-languages.controller.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const Infrastructure_1 = __webpack_require__(/*! ../shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
let NativeLanguagesModule = class NativeLanguagesModule {
};
NativeLanguagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: Infrastructure_1.QueueConstants.NATIVE_LANGUAGE_CLIENT,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [Infrastructure_1.QueueConstants.URL],
                        queue: Infrastructure_1.QueueConstants.MAIN_QUEUE,
                        queueOptions: {
                            durable: false,
                        },
                    },
                },
            ]),
            cqrs_1.CqrsModule,
        ],
        controllers: [native_languages_controller_1.NativeLanguagesController],
        providers: [native_languages_service_1.NativeLanguagesService],
    })
], NativeLanguagesModule);
exports.NativeLanguagesModule = NativeLanguagesModule;


/***/ }),

/***/ "./src/native-languages/native-languages.service.ts":
/*!**********************************************************!*\
  !*** ./src/native-languages/native-languages.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NativeLanguagesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let NativeLanguagesService = class NativeLanguagesService {
    create(createNativeLanguageDto) {
        return 'This action adds a new nativeLanguage';
    }
    findAll() {
        return `This action returns all nativeLanguages`;
    }
    findOne(id) {
        return `This action returns a #${id} nativeLanguage`;
    }
    update(id, updateNativeLanguageDto) {
        return `This action updates a #${id} nativeLanguage`;
    }
    remove(id) {
        return `This action removes a #${id} nativeLanguage`;
    }
};
NativeLanguagesService = __decorate([
    (0, common_1.Injectable)()
], NativeLanguagesService);
exports.NativeLanguagesService = NativeLanguagesService;


/***/ }),

/***/ "./src/prisma/prisma.module.ts":
/*!*************************************!*\
  !*** ./src/prisma/prisma.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./src/prisma/prisma.service.ts");
let PrismaModule = class PrismaModule {
};
PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);
exports.PrismaModule = PrismaModule;


/***/ }),

/***/ "./src/prisma/prisma.service.ts":
/*!**************************************!*\
  !*** ./src/prisma/prisma.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
exports.PrismaService = PrismaService;


/***/ }),

/***/ "./src/shared/Application/Adapters/Cqrs/Bus/Command/AppCommand.ts":
/*!************************************************************************!*\
  !*** ./src/shared/Application/Adapters/Cqrs/Bus/Command/AppCommand.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppCommand = void 0;
class AppCommand {
}
exports.AppCommand = AppCommand;


/***/ }),

/***/ "./src/shared/Application/Adapters/Cqrs/Bus/Command/AppCommandHandler.ts":
/*!*******************************************************************************!*\
  !*** ./src/shared/Application/Adapters/Cqrs/Bus/Command/AppCommandHandler.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppCommandHandler = void 0;
class AppCommandHandler {
}
exports.AppCommandHandler = AppCommandHandler;


/***/ }),

/***/ "./src/shared/Application/Adapters/Cqrs/Bus/Command/AppCommandHandlerDecorator.ts":
/*!****************************************************************************************!*\
  !*** ./src/shared/Application/Adapters/Cqrs/Bus/Command/AppCommandHandlerDecorator.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppCommandHandlerDecorator = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const AppCommandHandlerDecorator = (commandHandler) => {
    return (0, common_1.applyDecorators)((0, cqrs_1.CommandHandler)(commandHandler));
};
exports.AppCommandHandlerDecorator = AppCommandHandlerDecorator;


/***/ }),

/***/ "./src/shared/Application/Adapters/Cqrs/Bus/Command/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/Application/Adapters/Cqrs/Bus/Command/index.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./AppCommand */ "./src/shared/Application/Adapters/Cqrs/Bus/Command/AppCommand.ts"), exports);
__exportStar(__webpack_require__(/*! ./AppCommandHandler */ "./src/shared/Application/Adapters/Cqrs/Bus/Command/AppCommandHandler.ts"), exports);
__exportStar(__webpack_require__(/*! ./AppCommandHandlerDecorator */ "./src/shared/Application/Adapters/Cqrs/Bus/Command/AppCommandHandlerDecorator.ts"), exports);


/***/ }),

/***/ "./src/shared/Application/Adapters/Cqrs/Bus/Query/AppQuery.ts":
/*!********************************************************************!*\
  !*** ./src/shared/Application/Adapters/Cqrs/Bus/Query/AppQuery.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppQuery = void 0;
class AppQuery {
}
exports.AppQuery = AppQuery;


/***/ }),

/***/ "./src/shared/Application/Adapters/Cqrs/Bus/Query/AppQueryHandler.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/Application/Adapters/Cqrs/Bus/Query/AppQueryHandler.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppQueryHandler = void 0;
class AppQueryHandler {
}
exports.AppQueryHandler = AppQueryHandler;


/***/ }),

/***/ "./src/shared/Application/Adapters/Cqrs/Bus/Query/AppQueryHandlerDecorator.ts":
/*!************************************************************************************!*\
  !*** ./src/shared/Application/Adapters/Cqrs/Bus/Query/AppQueryHandlerDecorator.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppQueryHandlerDecorator = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const AppQueryHandlerDecorator = (handler) => {
    return (0, common_1.applyDecorators)((0, cqrs_1.QueryHandler)(handler));
};
exports.AppQueryHandlerDecorator = AppQueryHandlerDecorator;


/***/ }),

/***/ "./src/shared/Application/Adapters/Cqrs/Bus/Query/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/Application/Adapters/Cqrs/Bus/Query/index.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./AppQuery */ "./src/shared/Application/Adapters/Cqrs/Bus/Query/AppQuery.ts"), exports);
__exportStar(__webpack_require__(/*! ./AppQueryHandler */ "./src/shared/Application/Adapters/Cqrs/Bus/Query/AppQueryHandler.ts"), exports);
__exportStar(__webpack_require__(/*! ./AppQueryHandlerDecorator */ "./src/shared/Application/Adapters/Cqrs/Bus/Query/AppQueryHandlerDecorator.ts"), exports);


/***/ }),

/***/ "./src/shared/Application/Adapters/Cqrs/Bus/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Application/Adapters/Cqrs/Bus/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Command */ "./src/shared/Application/Adapters/Cqrs/Bus/Command/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./Query */ "./src/shared/Application/Adapters/Cqrs/Bus/Query/index.ts"), exports);


/***/ }),

/***/ "./src/shared/Application/Adapters/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/Application/Adapters/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Cqrs/Bus */ "./src/shared/Application/Adapters/Cqrs/Bus/index.ts"), exports);


/***/ }),

/***/ "./src/shared/Application/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/Application/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Adapters */ "./src/shared/Application/Adapters/index.ts"), exports);


/***/ }),

/***/ "./src/shared/Domain/Constants/Events/EventConstants.ts":
/*!**************************************************************!*\
  !*** ./src/shared/Domain/Constants/Events/EventConstants.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const EventConstants = () => ({
    messagePatterns: {
        language: {
            findByCode: 'event.language.findByCode',
        },
    },
});
exports["default"] = EventConstants();


/***/ }),

/***/ "./src/shared/Domain/ValueObjects/BaseVO.ts":
/*!**************************************************!*\
  !*** ./src/shared/Domain/ValueObjects/BaseVO.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseVO = void 0;
class BaseVO {
}
exports.BaseVO = BaseVO;


/***/ }),

/***/ "./src/shared/Domain/ValueObjects/booleanVO.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Domain/ValueObjects/booleanVO.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BooleanVO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const BaseVO_1 = __webpack_require__(/*! ./BaseVO */ "./src/shared/Domain/ValueObjects/BaseVO.ts");
class BooleanVO extends BaseVO_1.BaseVO {
    constructor(value) {
        super();
        this.valuePrimitive = value;
        this.validate();
    }
    static create(value) {
        return new this(value !== null && value !== void 0 ? value : false);
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

/***/ "./src/shared/Domain/ValueObjects/collectionVO.ts":
/*!********************************************************!*\
  !*** ./src/shared/Domain/ValueObjects/collectionVO.ts ***!
  \********************************************************/
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

/***/ "./src/shared/Domain/ValueObjects/idVO.ts":
/*!************************************************!*\
  !*** ./src/shared/Domain/ValueObjects/idVO.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ID = void 0;
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const stringVO_1 = __webpack_require__(/*! ./stringVO */ "./src/shared/Domain/ValueObjects/stringVO.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class ID extends stringVO_1.StringVO {
    constructor(valuePrimitive) {
        super(valuePrimitive);
        this.validate();
    }
    static fromString(value) {
        return new this(value);
    }
    static generate() {
        return new this((0, uuid_1.v4)());
    }
    validate() {
        if (!(0, uuid_1.validate)(this.valuePrimitive)) {
            throw new common_1.BadRequestException(`Incorrect Uuid format. "${this.valuePrimitive}"`);
        }
    }
}
exports.ID = ID;


/***/ }),

/***/ "./src/shared/Domain/ValueObjects/numberNullableVO.ts":
/*!************************************************************!*\
  !*** ./src/shared/Domain/ValueObjects/numberNullableVO.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumberNullableVO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const BaseVO_1 = __webpack_require__(/*! ./BaseVO */ "./src/shared/Domain/ValueObjects/BaseVO.ts");
class NumberNullableVO extends BaseVO_1.BaseVO {
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
        if (typeof this.valuePrimitive !== 'number' || true) {
            throw new common_1.BadRequestException('Just are allowed number and null types.');
        }
    }
}
exports.NumberNullableVO = NumberNullableVO;


/***/ }),

/***/ "./src/shared/Domain/ValueObjects/objectVO.ts":
/*!****************************************************!*\
  !*** ./src/shared/Domain/ValueObjects/objectVO.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectVO = void 0;
class ObjectVO {
    constructor(value) {
        this.valuePrimitive = {};
        this.valuePrimitive = value;
    }
    exists(value) {
        return Object.values(value).indexOf(value) >= 0;
    }
    add(value) {
        Object.assign(this.valuePrimitive, value);
    }
    reset() {
        this.valuePrimitive = {};
    }
    getItem(key) {
        return this.valuePrimitive[key];
    }
    deleteItem(key) {
        this.getItem(key) && delete this.valuePrimitive[key];
    }
}
exports.ObjectVO = ObjectVO;


/***/ }),

/***/ "./src/shared/Domain/ValueObjects/stringNullableVO.ts":
/*!************************************************************!*\
  !*** ./src/shared/Domain/ValueObjects/stringNullableVO.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringNullableVO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const BaseVO_1 = __webpack_require__(/*! ./BaseVO */ "./src/shared/Domain/ValueObjects/BaseVO.ts");
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
        if (typeof this.valuePrimitive !== 'string' || true) {
            throw new common_1.BadRequestException('Just are allowed string and null types.');
        }
    }
}
exports.StringNullableVO = StringNullableVO;


/***/ }),

/***/ "./src/shared/Domain/ValueObjects/stringVO.ts":
/*!****************************************************!*\
  !*** ./src/shared/Domain/ValueObjects/stringVO.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringVO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const BaseVO_1 = __webpack_require__(/*! ./BaseVO */ "./src/shared/Domain/ValueObjects/BaseVO.ts");
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

/***/ "./src/shared/Infrastructure/Repository/AppRepositoryService.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/Infrastructure/Repository/AppRepositoryService.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppRepositoryService = void 0;
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
class AppRepositoryService extends prisma_service_1.PrismaService {
}
exports.AppRepositoryService = AppRepositoryService;


/***/ }),

/***/ "./src/shared/Infrastructure/Repository/Constants/RepositoryProviders.ts":
/*!*******************************************************************************!*\
  !*** ./src/shared/Infrastructure/Repository/Constants/RepositoryProviders.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RepositoryProviders = void 0;
var RepositoryProviders;
(function (RepositoryProviders) {
    RepositoryProviders["USER_REPOSITORY"] = "USER_REPOSITORY";
    RepositoryProviders["LANGUAGE_REPOSITORY"] = "LANGUAGE_REPOSITORY";
    RepositoryProviders["NATIVE_LANGUAGE_REPOSITORY"] = "NATIVE_LANGUAGE_REPOSITORY";
    RepositoryProviders["LEARNING_LANGUAGE_REPOSITORY"] = "LEARNING_LANGUAGE_REPOSITORY";
})(RepositoryProviders = exports.RepositoryProviders || (exports.RepositoryProviders = {}));


/***/ }),

/***/ "./src/shared/Infrastructure/Repository/Constants/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/Infrastructure/Repository/Constants/index.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./RepositoryProviders */ "./src/shared/Infrastructure/Repository/Constants/RepositoryProviders.ts"), exports);


/***/ }),

/***/ "./src/shared/Infrastructure/Repository/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Infrastructure/Repository/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Constants */ "./src/shared/Infrastructure/Repository/Constants/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./AppRepositoryService */ "./src/shared/Infrastructure/Repository/AppRepositoryService.ts"), exports);


/***/ }),

/***/ "./src/shared/Infrastructure/Secrets/Queues/Constants.ts":
/*!***************************************************************!*\
  !*** ./src/shared/Infrastructure/Secrets/Queues/Constants.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueueConstants = void 0;
var QueueConstants;
(function (QueueConstants) {
    QueueConstants["URL"] = "amqp://rabbitmq:5672";
    QueueConstants["MAIN_QUEUE"] = "module_communication";
    QueueConstants["LANGUAGE_CLIENT"] = "language_client_queue";
    QueueConstants["NATIVE_LANGUAGE_CLIENT"] = "native_language_client_queue";
    QueueConstants["USER_CLIENT"] = "user_client_queue";
    QueueConstants["LEARNING_LANGUAGE_CLIENT"] = "learning_language_client_queue";
})(QueueConstants = exports.QueueConstants || (exports.QueueConstants = {}));


/***/ }),

/***/ "./src/shared/Infrastructure/Secrets/Queues/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Infrastructure/Secrets/Queues/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Constants */ "./src/shared/Infrastructure/Secrets/Queues/Constants.ts"), exports);


/***/ }),

/***/ "./src/shared/Infrastructure/Secrets/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/Infrastructure/Secrets/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Queues */ "./src/shared/Infrastructure/Secrets/Queues/index.ts"), exports);


/***/ }),

/***/ "./src/shared/Infrastructure/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Infrastructure/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Secrets */ "./src/shared/Infrastructure/Secrets/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./Repository */ "./src/shared/Infrastructure/Repository/index.ts"), exports);


/***/ }),

/***/ "./src/shared/Util/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Util/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./interfaces */ "./src/shared/Util/interfaces/index.ts"), exports);


/***/ }),

/***/ "./src/shared/Util/interfaces/IRequestDetail.ts":
/*!******************************************************!*\
  !*** ./src/shared/Util/interfaces/IRequestDetail.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/shared/Util/interfaces/TJwt.ts":
/*!********************************************!*\
  !*** ./src/shared/Util/interfaces/TJwt.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/shared/Util/interfaces/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/Util/interfaces/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./TJwt */ "./src/shared/Util/interfaces/TJwt.ts"), exports);
__exportStar(__webpack_require__(/*! ./IRequestDetail */ "./src/shared/Util/interfaces/IRequestDetail.ts"), exports);


/***/ }),

/***/ "./src/user/Application/Port/Services/Persistence/UserFinder.ts":
/*!**********************************************************************!*\
  !*** ./src/user/Application/Port/Services/Persistence/UserFinder.ts ***!
  \**********************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const UserRepositoryPort_1 = __webpack_require__(/*! ../../UserRepositoryPort */ "./src/user/Application/Port/UserRepositoryPort.ts");
const Infrastructure_1 = __webpack_require__(/*! ../../../../../shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
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
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(Infrastructure_1.RepositoryProviders.USER_REPOSITORY)),
    __metadata("design:paramtypes", [typeof (_a = typeof UserRepositoryPort_1.UserRepositoryPort !== "undefined" && UserRepositoryPort_1.UserRepositoryPort) === "function" ? _a : Object])
], UserFinder);
exports.UserFinder = UserFinder;


/***/ }),

/***/ "./src/user/Application/Port/Services/Persistence/UserRemover.ts":
/*!***********************************************************************!*\
  !*** ./src/user/Application/Port/Services/Persistence/UserRemover.ts ***!
  \***********************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const UserRepositoryPort_1 = __webpack_require__(/*! ../../UserRepositoryPort */ "./src/user/Application/Port/UserRepositoryPort.ts");
const Infrastructure_1 = __webpack_require__(/*! ../../../../../shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
let UserRemover = class UserRemover {
    constructor(userRepositoryPort) {
        this.userRepositoryPort = userRepositoryPort;
    }
    async remove(id) {
        return await this.userRepositoryPort.remove(id);
    }
};
UserRemover = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(Infrastructure_1.RepositoryProviders.USER_REPOSITORY)),
    __metadata("design:paramtypes", [typeof (_a = typeof UserRepositoryPort_1.UserRepositoryPort !== "undefined" && UserRepositoryPort_1.UserRepositoryPort) === "function" ? _a : Object])
], UserRemover);
exports.UserRemover = UserRemover;


/***/ }),

/***/ "./src/user/Application/Port/Services/Persistence/UserSaver.ts":
/*!*********************************************************************!*\
  !*** ./src/user/Application/Port/Services/Persistence/UserSaver.ts ***!
  \*********************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const UserRepositoryPort_1 = __webpack_require__(/*! ../../UserRepositoryPort */ "./src/user/Application/Port/UserRepositoryPort.ts");
const Infrastructure_1 = __webpack_require__(/*! ../../../../../shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
let UserSaver = class UserSaver {
    constructor(userRepositoryPort) {
        this.userRepositoryPort = userRepositoryPort;
    }
    async save(user) {
        return await this.userRepositoryPort.save(Object.assign({}, user));
    }
};
UserSaver = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(Infrastructure_1.RepositoryProviders.USER_REPOSITORY)),
    __metadata("design:paramtypes", [typeof (_a = typeof UserRepositoryPort_1.UserRepositoryPort !== "undefined" && UserRepositoryPort_1.UserRepositoryPort) === "function" ? _a : Object])
], UserSaver);
exports.UserSaver = UserSaver;


/***/ }),

/***/ "./src/user/Application/Port/Services/Persistence/index.ts":
/*!*****************************************************************!*\
  !*** ./src/user/Application/Port/Services/Persistence/index.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./UserFinder */ "./src/user/Application/Port/Services/Persistence/UserFinder.ts"), exports);
__exportStar(__webpack_require__(/*! ./UserRemover */ "./src/user/Application/Port/Services/Persistence/UserRemover.ts"), exports);
__exportStar(__webpack_require__(/*! ./UserSaver */ "./src/user/Application/Port/Services/Persistence/UserSaver.ts"), exports);


/***/ }),

/***/ "./src/user/Application/Port/Services/index.ts":
/*!*****************************************************!*\
  !*** ./src/user/Application/Port/Services/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Persistence */ "./src/user/Application/Port/Services/Persistence/index.ts"), exports);


/***/ }),

/***/ "./src/user/Application/Port/UserRepositoryPort.ts":
/*!*********************************************************!*\
  !*** ./src/user/Application/Port/UserRepositoryPort.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepositoryPort = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserRepositoryPort = class UserRepositoryPort {
};
UserRepositoryPort = __decorate([
    (0, common_1.Injectable)()
], UserRepositoryPort);
exports.UserRepositoryPort = UserRepositoryPort;


/***/ }),

/***/ "./src/user/Application/Port/index.ts":
/*!********************************************!*\
  !*** ./src/user/Application/Port/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./UserRepositoryPort */ "./src/user/Application/Port/UserRepositoryPort.ts"), exports);


/***/ }),

/***/ "./src/user/Application/UseCases/Create/CreateUserCommand.ts":
/*!*******************************************************************!*\
  !*** ./src/user/Application/UseCases/Create/CreateUserCommand.ts ***!
  \*******************************************************************/
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

/***/ "./src/user/Application/UseCases/Create/CreateUserCommandHandler.ts":
/*!**************************************************************************!*\
  !*** ./src/user/Application/UseCases/Create/CreateUserCommandHandler.ts ***!
  \**************************************************************************/
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
const CreateUserCommand_1 = __webpack_require__(/*! ./CreateUserCommand */ "./src/user/Application/UseCases/Create/CreateUserCommand.ts");
const Services_1 = __webpack_require__(/*! ../../Port/Services */ "./src/user/Application/Port/Services/index.ts");
const User_1 = __webpack_require__(/*! src/user/Domain/User */ "./src/user/Domain/User.ts");
const Application_1 = __webpack_require__(/*! ../../../../shared/Application */ "./src/shared/Application/index.ts");
let CreateUserCommandHandler = class CreateUserCommandHandler extends Application_1.AppCommandHandler {
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
    (0, Application_1.AppCommandHandlerDecorator)(CreateUserCommand_1.CreateUserCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.UserSaver !== "undefined" && Services_1.UserSaver) === "function" ? _a : Object])
], CreateUserCommandHandler);
exports.CreateUserCommandHandler = CreateUserCommandHandler;


/***/ }),

/***/ "./src/user/Application/UseCases/Create/index.ts":
/*!*******************************************************!*\
  !*** ./src/user/Application/UseCases/Create/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./CreateUserCommand */ "./src/user/Application/UseCases/Create/CreateUserCommand.ts"), exports);
__exportStar(__webpack_require__(/*! ./CreateUserCommandHandler */ "./src/user/Application/UseCases/Create/CreateUserCommandHandler.ts"), exports);


/***/ }),

/***/ "./src/user/Application/UseCases/index.ts":
/*!************************************************!*\
  !*** ./src/user/Application/UseCases/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Create */ "./src/user/Application/UseCases/Create/index.ts"), exports);


/***/ }),

/***/ "./src/user/Application/index.ts":
/*!***************************************!*\
  !*** ./src/user/Application/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommandHandlers = exports.PortServices = exports.UserRepositoryPort = void 0;
__exportStar(__webpack_require__(/*! ./UseCases */ "./src/user/Application/UseCases/index.ts"), exports);
var Port_1 = __webpack_require__(/*! ./Port */ "./src/user/Application/Port/index.ts");
Object.defineProperty(exports, "UserRepositoryPort", ({ enumerable: true, get: function () { return Port_1.UserRepositoryPort; } }));
exports.PortServices = __webpack_require__(/*! ./Port/Services */ "./src/user/Application/Port/Services/index.ts");
const UseCases_1 = __webpack_require__(/*! ./UseCases */ "./src/user/Application/UseCases/index.ts");
exports.CommandHandlers = [UseCases_1.CreateUserCommandHandler];


/***/ }),

/***/ "./src/user/Domain/User.ts":
/*!*********************************!*\
  !*** ./src/user/Domain/User.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const idVO_1 = __webpack_require__(/*! src/shared/Domain/ValueObjects/idVO */ "./src/shared/Domain/ValueObjects/idVO.ts");
const ValueObjects_1 = __webpack_require__(/*! ./ValueObjects */ "./src/user/Domain/ValueObjects/index.ts");
const booleanVO_1 = __webpack_require__(/*! src/shared/Domain/ValueObjects/booleanVO */ "./src/shared/Domain/ValueObjects/booleanVO.ts");
const stringNullableVO_1 = __webpack_require__(/*! src/shared/Domain/ValueObjects/stringNullableVO */ "./src/shared/Domain/ValueObjects/stringNullableVO.ts");
const globals_service_1 = __webpack_require__(/*! src/globals/globals.service */ "./src/globals/globals.service.ts");
class User {
    constructor(id, name, surname, email, password, avatar, age, isGoogleUser, description, role, blackList, isActive, country, gender, nativeLanguages, learningLanguages, ctx) {
        this.id = id;
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
        this.blackList = ValueObjects_1.BlackListVO.create();
    }
    static async create(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return new this(idVO_1.ID.generate(), new ValueObjects_1.NameVO(props.name), new ValueObjects_1.SurnameVO(props.surname), ValueObjects_1.EmailVo.create(props.email), new ValueObjects_1.PasswordVO(await globals_service_1.GlobalsService.encryptData(props.password)), new ValueObjects_1.AvatarVO((_a = props.avatar) !== null && _a !== void 0 ? _a : null), new ValueObjects_1.AgeVO((_b = props.age) !== null && _b !== void 0 ? _b : null), booleanVO_1.BooleanVO.create((_c = props.isGoogleUser) !== null && _c !== void 0 ? _c : false), stringNullableVO_1.StringNullableVO.create((_d = props.description) !== null && _d !== void 0 ? _d : null), ValueObjects_1.RolesVO.create((_e = props.roles) !== null && _e !== void 0 ? _e : ['user']), ValueObjects_1.BlackListVO.create((_f = props.blackList) !== null && _f !== void 0 ? _f : []), booleanVO_1.BooleanVO.create(false), stringNullableVO_1.StringNullableVO.create((_g = props.country) !== null && _g !== void 0 ? _g : null), new ValueObjects_1.GenderVO((_h = props.gender) !== null && _h !== void 0 ? _h : null), props.nativeLanguages, props.learningLanguages, props.ctx);
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

/***/ "./src/user/Domain/ValueObjects/ageVO.ts":
/*!***********************************************!*\
  !*** ./src/user/Domain/ValueObjects/ageVO.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgeVO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const numberNullableVO_1 = __webpack_require__(/*! ../../../shared/Domain/ValueObjects/numberNullableVO */ "./src/shared/Domain/ValueObjects/numberNullableVO.ts");
class AgeVO extends numberNullableVO_1.NumberNullableVO {
    constructor(value) {
        super(value);
        this.validate();
    }
    validate() {
        if (this.valuePrimitive && this.valuePrimitive < AgeVO.MIN) {
            throw new common_1.BadRequestException(`Age field cannot be empty or less than ${AgeVO.MIN} `);
        }
    }
}
exports.AgeVO = AgeVO;
AgeVO.MIN = 18;


/***/ }),

/***/ "./src/user/Domain/ValueObjects/avatarVO .ts":
/*!***************************************************!*\
  !*** ./src/user/Domain/ValueObjects/avatarVO .ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AvatarVO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const stringNullableVO_1 = __webpack_require__(/*! ../../../shared/Domain/ValueObjects/stringNullableVO */ "./src/shared/Domain/ValueObjects/stringNullableVO.ts");
class AvatarVO extends stringNullableVO_1.StringNullableVO {
    constructor(value) {
        super(value);
        this.validate();
    }
    validate() {
        var _a;
        if (this.valuePrimitive &&
            ((_a = this.valuePrimitive) === null || _a === void 0 ? void 0 : _a.length) > AvatarVO.MAX_LENGTH) {
            throw new common_1.BadRequestException(`Avatar field cannot be empty or longer than ${AvatarVO.MAX_LENGTH} `);
        }
    }
}
exports.AvatarVO = AvatarVO;
AvatarVO.MAX_LENGTH = 100;


/***/ }),

/***/ "./src/user/Domain/ValueObjects/blackListVO.ts":
/*!*****************************************************!*\
  !*** ./src/user/Domain/ValueObjects/blackListVO.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlackListVO = void 0;
const collectionVO_1 = __webpack_require__(/*! src/shared/Domain/ValueObjects/collectionVO */ "./src/shared/Domain/ValueObjects/collectionVO.ts");
class BlackListVO extends collectionVO_1.CollectionVO {
}
exports.BlackListVO = BlackListVO;


/***/ }),

/***/ "./src/user/Domain/ValueObjects/countries.ts":
/*!***************************************************!*\
  !*** ./src/user/Domain/ValueObjects/countries.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Countries = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let Countries = class Countries {
    constructor() {
        this.countries = ['Spain'];
    }
    findCountry(name) {
        return this.countries[name];
    }
};
Countries = __decorate([
    (0, common_1.Injectable)()
], Countries);
exports.Countries = Countries;


/***/ }),

/***/ "./src/user/Domain/ValueObjects/emailVO.ts":
/*!*************************************************!*\
  !*** ./src/user/Domain/ValueObjects/emailVO.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailVo = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const stringVO_1 = __webpack_require__(/*! ../../../shared/Domain/ValueObjects/stringVO */ "./src/shared/Domain/ValueObjects/stringVO.ts");
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

/***/ "./src/user/Domain/ValueObjects/genderVO.ts":
/*!**************************************************!*\
  !*** ./src/user/Domain/ValueObjects/genderVO.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenderVO = exports.gender = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const stringNullableVO_1 = __webpack_require__(/*! ../../../shared/Domain/ValueObjects/stringNullableVO */ "./src/shared/Domain/ValueObjects/stringNullableVO.ts");
const objectVO_1 = __webpack_require__(/*! ../../../shared/Domain/ValueObjects/objectVO */ "./src/shared/Domain/ValueObjects/objectVO.ts");
var gender;
(function (gender) {
    gender["MALE"] = "male";
    gender["FEMALE"] = "female";
    gender["PREFER_NOT_SAY"] = "prefer_not_say";
})(gender = exports.gender || (exports.gender = {}));
class GenderVO extends stringNullableVO_1.StringNullableVO {
    constructor(value) {
        super(value);
        this.validate();
        this.valuePrimitive = value;
    }
    validate() {
        const values = new objectVO_1.ObjectVO(gender);
        if (this.valuePrimitive && !values.exists(this.valuePrimitive)) {
            throw new common_1.BadRequestException(`Gender field cannot be empty and the option are: ${Object.values(gender)
                .map((item) => item)
                .join(', ')} `);
        }
    }
}
exports.GenderVO = GenderVO;
GenderVO.MAX_LENGTH = 100;


/***/ }),

/***/ "./src/user/Domain/ValueObjects/index.ts":
/*!***********************************************!*\
  !*** ./src/user/Domain/ValueObjects/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./ageVO */ "./src/user/Domain/ValueObjects/ageVO.ts"), exports);
__exportStar(__webpack_require__(/*! ./avatarVO  */ "./src/user/Domain/ValueObjects/avatarVO .ts"), exports);
__exportStar(__webpack_require__(/*! ./blackListVO */ "./src/user/Domain/ValueObjects/blackListVO.ts"), exports);
__exportStar(__webpack_require__(/*! ./countries */ "./src/user/Domain/ValueObjects/countries.ts"), exports);
__exportStar(__webpack_require__(/*! ./emailVO */ "./src/user/Domain/ValueObjects/emailVO.ts"), exports);
__exportStar(__webpack_require__(/*! ./genderVO */ "./src/user/Domain/ValueObjects/genderVO.ts"), exports);
__exportStar(__webpack_require__(/*! ./nameVO */ "./src/user/Domain/ValueObjects/nameVO.ts"), exports);
__exportStar(__webpack_require__(/*! ./passwordVO */ "./src/user/Domain/ValueObjects/passwordVO.ts"), exports);
__exportStar(__webpack_require__(/*! ./rolesVO */ "./src/user/Domain/ValueObjects/rolesVO.ts"), exports);
__exportStar(__webpack_require__(/*! ./surnameVO */ "./src/user/Domain/ValueObjects/surnameVO.ts"), exports);


/***/ }),

/***/ "./src/user/Domain/ValueObjects/nameVO.ts":
/*!************************************************!*\
  !*** ./src/user/Domain/ValueObjects/nameVO.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NameVO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const stringVO_1 = __webpack_require__(/*! ../../../shared/Domain/ValueObjects/stringVO */ "./src/shared/Domain/ValueObjects/stringVO.ts");
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

/***/ "./src/user/Domain/ValueObjects/passwordVO.ts":
/*!****************************************************!*\
  !*** ./src/user/Domain/ValueObjects/passwordVO.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordVO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const stringVO_1 = __webpack_require__(/*! ../../../shared/Domain/ValueObjects/stringVO */ "./src/shared/Domain/ValueObjects/stringVO.ts");
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

/***/ "./src/user/Domain/ValueObjects/rolesVO.ts":
/*!*************************************************!*\
  !*** ./src/user/Domain/ValueObjects/rolesVO.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesVO = void 0;
const collectionVO_1 = __webpack_require__(/*! src/shared/Domain/ValueObjects/collectionVO */ "./src/shared/Domain/ValueObjects/collectionVO.ts");
class RolesVO extends collectionVO_1.CollectionVO {
}
exports.RolesVO = RolesVO;


/***/ }),

/***/ "./src/user/Domain/ValueObjects/surnameVO.ts":
/*!***************************************************!*\
  !*** ./src/user/Domain/ValueObjects/surnameVO.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SurnameVO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const stringVO_1 = __webpack_require__(/*! ../../../shared/Domain/ValueObjects/stringVO */ "./src/shared/Domain/ValueObjects/stringVO.ts");
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

/***/ "./src/user/Infrastructure/Repository/PrismaUserRepository.ts":
/*!********************************************************************!*\
  !*** ./src/user/Infrastructure/Repository/PrismaUserRepository.ts ***!
  \********************************************************************/
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
exports.PrismaUserRepository = void 0;
const User_1 = __webpack_require__(/*! ../../Domain/User */ "./src/user/Domain/User.ts");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PrismaUserRepository = class PrismaUserRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async save(user) {
        var _a;
        console.log('after');
        const userObject = await this.prismaService.user.upsert({
            create: Object.assign({}, user),
            update: Object.assign({}, user),
            where: { id: user.id },
        });
        console.log('after save', userObject);
        return (_a = User_1.User.fromObject(userObject)) === null || _a === void 0 ? void 0 : _a.id;
    }
    async findAll() {
        const users = await this.prismaService.user.findMany();
        return users === null || users === void 0 ? void 0 : users.map((user) => User_1.User.fromObject(user));
    }
    async findOne(id) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
        return User_1.User.fromObject(user);
    }
    async findOneByEmail(email) {
        const user = await this.prismaService.user.findFirst({
            where: {
                email,
            },
        });
        return User_1.User.fromObject(user);
    }
    async remove(id) {
        await this.prismaService.user.delete({
            where: {
                id,
            },
        });
    }
};
PrismaUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PrismaUserRepository);
exports.PrismaUserRepository = PrismaUserRepository;


/***/ }),

/***/ "./src/user/controller/UserCreator.ts":
/*!********************************************!*\
  !*** ./src/user/controller/UserCreator.ts ***!
  \********************************************/
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCreator = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const decorators_1 = __webpack_require__(/*! src/decorators */ "./src/decorators/index.ts");
const Util_1 = __webpack_require__(/*! src/shared/Util */ "./src/shared/Util/index.ts");
const create_user_dto_1 = __webpack_require__(/*! ../dto/create-user.dto */ "./src/user/dto/create-user.dto.ts");
const Services_1 = __webpack_require__(/*! ../Application/Port/Services */ "./src/user/Application/Port/Services/index.ts");
const Application_1 = __webpack_require__(/*! ../Application */ "./src/user/Application/index.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
let UserCreator = class UserCreator {
    constructor(saver, finder, commandBus) {
        this.saver = saver;
        this.finder = finder;
        this.commandBus = commandBus;
    }
    async create(createUserRestDto, ctx) {
        console.log(createUserRestDto);
        await this.commandBus.execute(new Application_1.CreateUserCommand(Object.assign(Object.assign({}, createUserRestDto), { ctx: ctx })));
        console.log('passed');
        return 'created';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.RequestDetails)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _a : Object, typeof (_b = typeof Util_1.IRequestDetail !== "undefined" && Util_1.IRequestDetail) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserCreator.prototype, "create", null);
UserCreator = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_c = typeof Services_1.UserSaver !== "undefined" && Services_1.UserSaver) === "function" ? _c : Object, typeof (_d = typeof Services_1.UserFinder !== "undefined" && Services_1.UserFinder) === "function" ? _d : Object, typeof (_e = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _e : Object])
], UserCreator);
exports.UserCreator = UserCreator;


/***/ }),

/***/ "./src/user/controller/UserDeleter.ts":
/*!********************************************!*\
  !*** ./src/user/controller/UserDeleter.ts ***!
  \********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const guards_1 = __webpack_require__(/*! src/auth/guards */ "./src/auth/guards/index.ts");
const Services_1 = __webpack_require__(/*! ../Application/Port/Services */ "./src/user/Application/Port/Services/index.ts");
let UserDeleter = class UserDeleter {
    constructor(remover) {
        this.remover = remover;
    }
    remove(id) {
        return this.remover.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserDeleter.prototype, "remove", null);
UserDeleter = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.UserRemover !== "undefined" && Services_1.UserRemover) === "function" ? _a : Object])
], UserDeleter);
exports.UserDeleter = UserDeleter;


/***/ }),

/***/ "./src/user/controller/UserFindAll.ts":
/*!********************************************!*\
  !*** ./src/user/controller/UserFindAll.ts ***!
  \********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Services_1 = __webpack_require__(/*! ../Application/Port/Services */ "./src/user/Application/Port/Services/index.ts");
let UserFindAll = class UserFindAll {
    constructor(findService) {
        this.findService = findService;
    }
    findAll() {
        return this.findService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserFindAll.prototype, "findAll", null);
UserFindAll = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.UserFinder !== "undefined" && Services_1.UserFinder) === "function" ? _a : Object])
], UserFindAll);
exports.UserFindAll = UserFindAll;


/***/ }),

/***/ "./src/user/controller/UserFindById.ts":
/*!*********************************************!*\
  !*** ./src/user/controller/UserFindById.ts ***!
  \*********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Services_1 = __webpack_require__(/*! ../Application/Port/Services */ "./src/user/Application/Port/Services/index.ts");
let UserFindById = class UserFindById {
    constructor(findService) {
        this.findService = findService;
    }
    findOne(id) {
        return this.findService.findOne(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserFindById.prototype, "findOne", null);
UserFindById = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof Services_1.UserFinder !== "undefined" && Services_1.UserFinder) === "function" ? _a : Object])
], UserFindById);
exports.UserFindById = UserFindById;


/***/ }),

/***/ "./src/user/controller/UserUpdater.ts":
/*!********************************************!*\
  !*** ./src/user/controller/UserUpdater.ts ***!
  \********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const update_user_dto_1 = __webpack_require__(/*! ../dto/update-user.dto */ "./src/user/dto/update-user.dto.ts");
const Services_1 = __webpack_require__(/*! ../Application/Port/Services */ "./src/user/Application/Port/Services/index.ts");
const User_1 = __webpack_require__(/*! ../Domain/User */ "./src/user/Domain/User.ts");
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
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], UserUpdater.prototype, "update", null);
UserUpdater = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_b = typeof Services_1.UserSaver !== "undefined" && Services_1.UserSaver) === "function" ? _b : Object])
], UserUpdater);
exports.UserUpdater = UserUpdater;


/***/ }),

/***/ "./src/user/controller/index.ts":
/*!**************************************!*\
  !*** ./src/user/controller/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./UserCreator */ "./src/user/controller/UserCreator.ts"), exports);
__exportStar(__webpack_require__(/*! ./UserFindById */ "./src/user/controller/UserFindById.ts"), exports);
__exportStar(__webpack_require__(/*! ./UserFindAll */ "./src/user/controller/UserFindAll.ts"), exports);
__exportStar(__webpack_require__(/*! ./UserUpdater */ "./src/user/controller/UserUpdater.ts"), exports);
__exportStar(__webpack_require__(/*! ./UserDeleter */ "./src/user/controller/UserDeleter.ts"), exports);


/***/ }),

/***/ "./src/user/dto/create-user.dto.ts":
/*!*****************************************!*\
  !*** ./src/user/dto/create-user.dto.ts ***!
  \*****************************************/
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
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 40),
    __metadata("design:type", String)
], CreateUserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], CreateUserDto.prototype, "surname", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 32),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(18),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255),
    __metadata("design:type", String)
], CreateUserDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateUserDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "nativeLanguages", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "learningLanguages", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./src/user/dto/update-user.dto.ts":
/*!*****************************************!*\
  !*** ./src/user/dto/update-user.dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_user_dto_1 = __webpack_require__(/*! ./create-user.dto */ "./src/user/dto/create-user.dto.ts");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./src/user/dto/userDto.ts":
/*!*********************************!*\
  !*** ./src/user/dto/userDto.ts ***!
  \*********************************/
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

/***/ "./src/user/user.module.ts":
/*!*********************************!*\
  !*** ./src/user/user.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Controllers = __webpack_require__(/*! ./controller */ "./src/user/controller/index.ts");
const Application_1 = __webpack_require__(/*! ./Application */ "./src/user/Application/index.ts");
const PrismaUserRepository_1 = __webpack_require__(/*! ./Infrastructure/Repository/PrismaUserRepository */ "./src/user/Infrastructure/Repository/PrismaUserRepository.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const Infrastructure_1 = __webpack_require__(/*! ../shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: Infrastructure_1.QueueConstants.USER_CLIENT,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [Infrastructure_1.QueueConstants.URL],
                        queue: Infrastructure_1.QueueConstants.MAIN_QUEUE,
                        queueOptions: {
                            durable: false,
                        },
                    },
                },
            ]),
            cqrs_1.CqrsModule,
            prisma_module_1.PrismaModule,
        ],
        controllers: [...Object.values(Controllers)],
        providers: [
            ...Object.values(Application_1.PortServices),
            ...Object.values(Application_1.CommandHandlers),
            {
                provide: Infrastructure_1.RepositoryProviders.USER_REPOSITORY,
                useClass: PrismaUserRepository_1.PrismaUserRepository,
            },
        ],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/cqrs":
/*!*******************************!*\
  !*** external "@nestjs/cqrs" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cache-manager":
/*!********************************!*\
  !*** external "cache-manager" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cache-manager");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
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
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const path_1 = __webpack_require__(/*! path */ "path");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const Infrastructure_1 = __webpack_require__(/*! ./shared/Infrastructure */ "./src/shared/Infrastructure/index.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [Infrastructure_1.QueueConstants.URL],
            queue: Infrastructure_1.QueueConstants.MAIN_QUEUE,
            queueOptions: {
                durable: false,
            },
        },
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
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