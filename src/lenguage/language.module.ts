import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [CqrsModule, PrismaModule],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
