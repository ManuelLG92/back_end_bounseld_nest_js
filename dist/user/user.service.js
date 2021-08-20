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
const language_entity_1 = require("../language/entities/language.entity");
let UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        return await this.prismaService.user.findMany({
            include: {
                country: true,
                learningLanguages: {
                    include: {
                        language: true,
                    },
                },
                nativeLanguages: {
                    include: {
                        language: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return await this.prismaService.user.findUnique({
            where: { id },
            include: {
                country: true,
                learningLanguages: {
                    include: {
                        language: true,
                    },
                },
                nativeLanguages: {
                    include: {
                        language: true,
                    },
                },
            },
        });
    }
    async update(id, updateUserInput) {
        let user = await this.prismaService.user.findUnique({
            where: { id },
        });
        if (!user)
            throw common_1.NotFoundException;
        let userPrisma = {};
        Object.assign(userPrisma, updateUserInput);
        user = await this.prismaService.user.update({
            where: { id },
            data: userPrisma,
        });
        return user;
    }
    async create(createUserInput) {
        let userData;
        userData = {
            name: createUserInput.name,
            surname: createUserInput.surname,
            email: createUserInput.email,
            password: createUserInput.password,
            gender: createUserInput.gender,
            age: createUserInput.age,
            country: {
                connect: {
                    id: createUserInput.countryId,
                },
            },
            description: '',
        };
        const userCreated = await this.prismaService.user.create({
            data: userData,
        });
        return userCreated;
    }
    async remove(id) {
        try {
            await this.prismaService.nativeLanguage.deleteMany({
                where: { userId: id },
            });
            await this.prismaService.learningLanguage.deleteMany({
                where: { userId: id },
            });
            await this.prismaService.report.deleteMany({
                where: { userId: id },
            });
            await this.prismaService.user.delete({
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
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map