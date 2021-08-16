import { Module } from '@nestjs/common';
import { LearningLanguageService } from './learning-language.service';
import { LearningLanguageResolver } from './learning-language.resolver';
import { PrismaModule } from 'src/prisma/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule
  ],
  providers: [LearningLanguageResolver, LearningLanguageService]
})
export class LearningLanguageModule {}
