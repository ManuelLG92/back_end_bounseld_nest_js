import { Test, TestingModule } from '@nestjs/testing';
import { TestKafkaController } from './test-kafka.controller';
import { TestKafkaService } from './test-kafka.service';

describe('TestKafkaController', () => {
  let controller: TestKafkaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestKafkaController],
      providers: [TestKafkaService],
    }).compile();

    controller = module.get<TestKafkaController>(TestKafkaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
