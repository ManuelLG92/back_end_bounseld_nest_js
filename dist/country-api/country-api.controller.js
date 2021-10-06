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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryApiController = void 0;
const common_1 = require("@nestjs/common");
const country_api_service_1 = require("./country-api.service");
const create_country_api_dto_1 = require("./dto/create-country-api.dto");
const update_country_api_dto_1 = require("./dto/update-country-api.dto");
let CountryApiController = class CountryApiController {
    constructor(countryApiService) {
        this.countryApiService = countryApiService;
    }
    create(createCountryApiDto) {
        return this.countryApiService.create(createCountryApiDto);
    }
    findAll() {
        return this.countryApiService.findAll();
    }
    findOne(id) {
        return this.countryApiService.findOne(+id);
    }
    update(id, updateCountryApiDto) {
        return this.countryApiService.update(+id, updateCountryApiDto);
    }
    remove(id) {
        return this.countryApiService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_country_api_dto_1.CreateCountryApiDto]),
    __metadata("design:returntype", void 0)
], CountryApiController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountryApiController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryApiController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_country_api_dto_1.UpdateCountryApiDto]),
    __metadata("design:returntype", void 0)
], CountryApiController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryApiController.prototype, "remove", null);
CountryApiController = __decorate([
    common_1.Controller('country-api'),
    __metadata("design:paramtypes", [country_api_service_1.CountryApiService])
], CountryApiController);
exports.CountryApiController = CountryApiController;
//# sourceMappingURL=country-api.controller.js.map