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
exports.KafkaController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let KafkaController = class KafkaController {
    constructor(clientKafka) {
        this.clientKafka = clientKafka;
    }
    async onModuleInit() {
        this.clientKafka.subscribeToResponseOf('send_email_smtp');
        this.kafkaProducer = await this.clientKafka.connect();
    }
    async testingKafka() {
        const result = await this.kafkaProducer.send({
            topic: 'testing',
            messages: [
                {
                    key: Math.random() + '',
                    value: JSON.stringify({
                        order: 1000,
                        client: 'testing',
                    }),
                },
            ],
        });
        console.log(result);
    }
    sendEmail(message) {
        console.log('Se recibe en kafka.controller send_email');
        message = message.value;
        console.log(message);
        this.clientKafka
            .send('send_email_smtp', JSON.stringify({ key: `${message.email} processing` }))
            .subscribe((reply) => console.log(reply));
    }
};
__decorate([
    common_1.Get('testing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KafkaController.prototype, "testingKafka", null);
__decorate([
    microservices_1.MessagePattern('send_email'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KafkaController.prototype, "sendEmail", null);
KafkaController = __decorate([
    common_1.Controller(),
    __param(0, common_1.Inject('KAFKA_MODULE_BROKER')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], KafkaController);
exports.KafkaController = KafkaController;
//# sourceMappingURL=kafka.controller.js.map