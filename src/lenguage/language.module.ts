import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { QueryHandlers, LanguagePortServices } from './Application';
import { PrismaLanguageRepository } from './Infrastructure/Repository/PrismaLanguageRepository';
import * as Controllers from './controllers';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QueueConstants, RepositoryProviders } from '../shared/Infrastructure';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: QueueConstants.LANGUAGE_CLIENT,
        transport: Transport.RMQ,
        options: {
          urls: [QueueConstants.URL],
          queue: QueueConstants.MAIN_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    CqrsModule,
    PrismaModule,
  ],
  controllers: [...Object.values(Controllers)],
  providers: [
    ...Object.values(QueryHandlers),
    ...Object.values(LanguagePortServices),
    {
      provide: RepositoryProviders.LANGUAGE_REPOSITORY,
      useClass: PrismaLanguageRepository,
    },
  ],
})
export class LanguageModule {}
