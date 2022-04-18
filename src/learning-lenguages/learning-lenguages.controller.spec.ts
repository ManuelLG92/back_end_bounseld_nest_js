import { Test, TestingModule } from '@nestjs/testing';
import { LearningLenguagesController } from './learning-lenguages.controller';
import { LearningLenguagesService } from './learning-lenguages.service';

describe('LearningLenguagesController', () => {
  let controller: LearningLenguagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearningLenguagesController],
      providers: [LearningLenguagesService],
    }).compile();

    controller = module.get<LearningLenguagesController>(
      LearningLenguagesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
