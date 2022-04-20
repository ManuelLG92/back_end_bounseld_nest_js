import { Test, TestingModule } from '@nestjs/testing';
import { LearningLanguagesService } from './learning-languages.service';

describe('LearningLenguagesService', () => {
  let service: LearningLanguagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearningLanguagesService],
    }).compile();

    service = module.get<LearningLanguagesService>(LearningLanguagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
