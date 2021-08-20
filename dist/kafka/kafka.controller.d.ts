import { OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
export declare class KafkaController implements OnModuleInit {
    private clientKafka;
    private kafkaProducer;
    constructor(clientKafka: ClientKafka);
    onModuleInit(): Promise<void>;
    testingKafka(): Promise<void>;
    sendEmail(message: any): void;
}
