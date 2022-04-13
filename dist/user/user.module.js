"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const Controllers = require("./controller");
const Application_1 = require("./Application");
const PrismaUserRepository_1 = require("./Infrastructure/Repository/PrismaUserRepository");
const repository_1 = require("./constants/repository");
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
//# sourceMappingURL=user.module.js.map