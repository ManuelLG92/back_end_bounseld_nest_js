"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryApiModule = void 0;
const common_1 = require("@nestjs/common");
const country_api_service_1 = require("./country-api.service");
const country_api_controller_1 = require("./country-api.controller");
let CountryApiModule = class CountryApiModule {
};
CountryApiModule = __decorate([
    common_1.Module({
        controllers: [country_api_controller_1.CountryApiController],
        providers: [country_api_service_1.CountryApiService],
    })
], CountryApiModule);
exports.CountryApiModule = CountryApiModule;
//# sourceMappingURL=country-api.module.js.map