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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./entities/user.entity");
const create_user_input_1 = require("./dto/create-user.input");
const update_user_input_1 = require("./dto/update-user.input");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let UserResolver = class UserResolver {
    constructor(clientKafka, userService) {
        this.clientKafka = clientKafka;
        this.userService = userService;
    }
    async onModuleInit() {
        this.kafkaProducer = await this.clientKafka.connect();
        this.clientKafka.subscribeToResponseOf('email_confirmation_received');
    }
    async createUser(createUserInput) {
        const user = await this.userService.create(createUserInput);
        if (user) {
            await this.kafkaProducer.send({
                topic: 'send_email',
                messages: [
                    {
                        key: Math.random() + '',
                        value: JSON.stringify({ userId: user.id, email: user.email }),
                    },
                ],
            });
            console.log('Se envia user.resolver send_mail');
        }
        return user;
    }
    findAll() {
        return this.userService.findAll();
    }
    findOne(id) {
        return this.userService.findOne(id);
    }
    updateUser(updateUserInput) {
        return this.userService.update(updateUserInput.id, updateUserInput);
    }
    removeUser(id) {
        return this.userService.remove(id);
    }
    sendEmail(message) {
        message = message.value;
        console.log('Se recibe user.resolver email_confirmation_received');
        console.log(message);
        return {
            reply: 'ok',
        };
    }
};
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    __param(0, graphql_1.Args('createUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Query(() => [user_entity_1.User], { name: 'users' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => user_entity_1.User, { name: 'user' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    __param(0, graphql_1.Args('updateUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_input_1.UpdateUserInput]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateUser", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "removeUser", null);
__decorate([
    microservices_1.MessagePattern('email_confirmation_received'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "sendEmail", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_entity_1.User),
    __param(0, common_1.Inject('KAFKA_BROKER')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka,
        user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map