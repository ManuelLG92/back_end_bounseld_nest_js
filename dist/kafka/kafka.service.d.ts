import { ClientKafka } from '@nestjs/microservices';
export declare class KafkaService {
    private clientKafka;
    private kafkaProducer;
    constructor(clientKafka: ClientKafka);
    getKafkaClient(): ClientKafka;
    getKafkaProducer(): ClientKafka;
}
