"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestKafkaModule = void 0;
const common_1 = require("@nestjs/common");
const test_kafka_service_1 = require("./test-kafka.service");
const test_kafka_controller_1 = require("./test-kafka.controller");
const microservices_1 = require("@nestjs/microservices");
let TestKafkaModule = class TestKafkaModule {
};
TestKafkaModule = __decorate([
    common_1.Module({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'KAFKA_MODULE_BROKER_TEST',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'hero',
                            brokers: ['localhost:9094'],
                        },
                        consumer: {
                            groupId: 'my-consumer-nest-kafka-test',
                        },
                    },
                },
            ]),
        ],
        controllers: [test_kafka_controller_1.TestKafkaController],
        providers: [test_kafka_service_1.TestKafkaService],
    })
], TestKafkaModule);
exports.TestKafkaModule = TestKafkaModule;
//# sourceMappingURL=test-kafka.module.js.map