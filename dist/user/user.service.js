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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma/prisma.service");
const globals_service_1 = require("../globals/globals.service");
let UserService = class UserService {
    constructor(prismaService, globalService) {
        this.prismaService = prismaService;
        this.globalService = globalService;
    }
    async create(createUserRestDto, reqDetails) {
        return await this.prismaService.user.create({
            data: Object.assign(Object.assign({}, createUserRestDto), { password: await this.globalService.setData(createUserRestDto.password), isGoogleUser: false, ctx: reqDetails }),
        });
    }
    async findAll() {
        return await this.prismaService.user.findMany();
    }
    async findOne(id) {
        return await this.prismaService.user.findUnique({
            where: {
                id: id,
            },
        });
    }
    async update(id, updateUserRestDto) {
        if (updateUserRestDto.password) {
            updateUserRestDto.password = await this.globalService.setData(updateUserRestDto.password);
        }
        return await this.prismaService.user.update({
            where: {
                id: id,
            },
            data: Object.assign({}, updateUserRestDto),
        });
    }
    async remove(id) {
        return await this.prismaService.user.delete({
            where: {
                id: id,
            },
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        globals_service_1.GlobalsService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map