import { Test, TestingModule } from '@nestjs/testing';
import { TestKafkaService } from './test-kafka.service';

describe('TestKafkaService', () => {
  let service: TestKafkaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestKafkaService],
    }).compile();

    service = module.get<TestKafkaService>(TestKafkaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
