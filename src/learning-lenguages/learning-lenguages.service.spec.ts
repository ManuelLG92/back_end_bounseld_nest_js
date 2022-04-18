import { Test, TestingModule } from '@nestjs/testing';
import { LearningLenguagesService } from './learning-lenguages.service';

describe('LearningLenguagesService', () => {
  let service: LearningLenguagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearningLenguagesService],
    }).compile();

    service = module.get<LearningLenguagesService>(LearningLenguagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
