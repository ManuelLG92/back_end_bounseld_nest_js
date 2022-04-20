import { Test, TestingModule } from '@nestjs/testing';
import { LearningLaguagesController } from './learning-laguages.controller';
import { LearningLanguagesService } from './learning-languages.service';

describe('LearningLenguagesController', () => {
  let controller: LearningLaguagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearningLaguagesController],
      providers: [LearningLanguagesService],
    }).compile();

    controller = module.get<LearningLaguagesController>(
      LearningLaguagesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
