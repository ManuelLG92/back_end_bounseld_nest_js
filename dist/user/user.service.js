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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma/prisma.service");
const globals_service_1 = require("../globals/globals.service");
let UserService = UserService_1 = class UserService {
    constructor(prismaService, globalService) {
        this.prismaService = prismaService;
        this.globalService = globalService;
    }
    async create(createUserRestDto, reqDetails) {
        return await this.prismaService.user.create({
            data: Object.assign(Object.assign({}, createUserRestDto), { password: await globals_service_1.GlobalsService.encryptData(createUserRestDto.password), isGoogleUser: false, ctx: reqDetails }),
        });
    }
    async findAll() {
        return await this.prismaService.user.findMany();
    }
    async findOne(id) {
        return await this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
    }
    async findOneByEmail(email) {
        return await this.prismaService.user.findFirst({
            where: {
                email,
            },
        });
    }
    async update(id, updateUserRestDto) {
        if (updateUserRestDto.password) {
            updateUserRestDto.password = await await globals_service_1.GlobalsService.encryptData(updateUserRestDto.password);
        }
        const user = await this.prismaService.user.findFirst({
            where: {
                id,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('not found user');
        }
        await this.cleanUpUserLanguages(id);
        return await this.prismaService.user.update({
            where: {
                id,
            },
            data: Object.assign(Object.assign({}, updateUserRestDto), { nativeLanguages: {
                    upsert: UserService_1.getItemsWithoutEmptyCodes(updateUserRestDto.nativeLanguages).map((data) => ({
                        create: data,
                        update: data,
                        where: { id },
                    })),
                }, learningLanguages: {
                    upsert: UserService_1.getItemsWithoutEmptyCodes(updateUserRestDto.learningLanguages).map((data) => ({
                        create: data,
                        update: data,
                        where: { id },
                    })),
                } }),
        });
    }
    async cleanUpUserLanguages(id) {
        await this.prismaService.nativeLanguages.deleteMany({
            where: {
                user: { some: { id } },
            },
        });
        await this.prismaService.learningLanguages.deleteMany({
            where: {
                user: { some: { id } },
            },
        });
    }
    static getItemsWithoutEmptyCodes(collection) {
        return collection.filter((item) => {
            if (item.code.length === 2) {
                return item;
            }
        });
    }
    async remove(id) {
        return await this.prismaService.user.delete({
            where: {
                id,
            },
        });
    }
};
UserService = UserService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        globals_service_1.GlobalsService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map