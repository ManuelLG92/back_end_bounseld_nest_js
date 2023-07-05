import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { LanguagePortServices, QueryHandlers } from './Application';
import { PrismaLanguageRepository } from './Infrastructure/Repository/PrismaLanguageRepository';
import * as RestControllers from './controllers/Rest';
import * as EventControllers from './controllers/Event';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QueueConstants, RepositoryProviders } from 'src/shared/Infrastructure';

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
  controllers: [
    ...Object.values(RestControllers),
    ...Object.values(EventControllers),
  ],
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
