import { Module } from '@nestjs/common';
import { LearningLenguagesService } from './learning-lenguages.service';
import { LearningLenguagesController } from './learning-lenguages.controller';

@Module({
  controllers: [LearningLenguagesController],
  providers: [LearningLenguagesService],
})
export class LearningLenguagesModule {}
