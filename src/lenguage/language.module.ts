import { Module } from '@nestjs/common';
// import { LanguageService } from './language.service';
// import { LanguageController } from './language.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { QueryHandlers, LanguagePortServices } from './Application';
import { LanguageProviderConstants } from './constants/repository';
import { PrismaLanguageRepository } from './Infrastructure/Repository/PrismaLanguageRepository';
import * as Controllers from './controllers';
@Module({
  imports: [CqrsModule, PrismaModule],
  controllers: [...Object.values(Controllers)],
  providers: [
    // LanguageService,
    ...Object.values(QueryHandlers),
    ...Object.values(LanguagePortServices),

    {
      provide: LanguageProviderConstants.LANGUAGE_REPOSITORY,
      useClass: PrismaLanguageRepository,
    },
  ],
})
export class LanguageModule {}
