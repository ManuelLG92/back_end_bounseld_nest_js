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
exports.CountryApiService = void 0;
const common_1 = require("@nestjs/common");
const create_country_api_dto_1 = require("./dto/create-country-api.dto");
const update_country_api_dto_1 = require("./dto/update-country-api.dto");
const prisma_service_1 = require("../prisma/prisma/prisma.service");
let CountryApiService = class CountryApiService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        return await this.prismaService.country.findMany({});
    }
    async findOne(id) {
        return await this.prismaService.country.findUnique({
            where: { id },
        });
    }
    async update(id, data) {
        let country = await this.prismaService.country.findUnique({
            where: { id },
        });
        if (!country)
            throw common_1.NotFoundException;
        country = await this.prismaService.country.update({
            where: { id },
            data: data,
        });
        return country;
    }
    async create(createCountryApiDto) {
        return await this.prismaService.country.create({
            data: createCountryApiDto,
        });
    }
    async remove(id) {
        try {
            await this.prismaService.country.delete({
                where: { id: id },
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountryApiService.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_country_api_dto_1.UpdateCountryApiDto]),
    __metadata("design:returntype", Promise)
], CountryApiService.prototype, "update", null);
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_country_api_dto_1.CreateCountryApiDto]),
    __metadata("design:returntype", Promise)
], CountryApiService.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountryApiService.prototype, "remove", null);
CountryApiService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CountryApiService);
exports.CountryApiService = CountryApiService;
//# sourceMappingURL=country-api.service.js.map