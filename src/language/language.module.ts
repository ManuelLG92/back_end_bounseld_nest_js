import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageResolver } from './language.resolver';
import { PrismaModule } from 'src/prisma/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule
  ],
  providers: [LanguageResolver, LanguageService]
})
export class LanguageModule {}
