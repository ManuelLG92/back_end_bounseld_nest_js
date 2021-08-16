import { Module } from '@nestjs/common';
import { NativeLanguageService } from './native-language.service';
import { NativeLanguageResolver } from './native-language.resolver';
import { PrismaModule } from 'src/prisma/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule
  ],
  providers: [NativeLanguageResolver, NativeLanguageService]
})
export class NativeLanguageModule {}
