import { TestKafkaService } from './test-kafka.service';
export declare class TestKafkaController {
    private readonly testKafkaService;
    constructor(testKafkaService: TestKafkaService);
    testingKafkareceiver(message: any): {
        received: string;
    };
}
