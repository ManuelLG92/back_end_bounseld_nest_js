import { Module } from '@nestjs/common';
import { LearningLanguagesService } from './learning-languages.service';
import { LearningLaguagesController } from './learning-laguages.controller';

@Module({
  controllers: [LearningLaguagesController],
  providers: [LearningLanguagesService],
})
export class LearningLanguagesModule {}
