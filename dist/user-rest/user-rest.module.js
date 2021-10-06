"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRestModule = void 0;
const common_1 = require("@nestjs/common");
const user_rest_service_1 = require("./user-rest.service");
const user_rest_controller_1 = require("./user-rest.controller");
const VO = require("./VO");
let UserRestModule = class UserRestModule {
};
UserRestModule = __decorate([
    common_1.Module({
        controllers: [user_rest_controller_1.UserRestController],
        providers: [user_rest_service_1.UserRestService, ...Object.values(VO)],
    })
], UserRestModule);
exports.UserRestModule = UserRestModule;
//# sourceMappingURL=user-rest.module.js.map