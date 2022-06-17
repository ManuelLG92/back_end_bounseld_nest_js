import { Module } from '@nestjs/common';
import * as Controllers from './Controller/Rest';
// import * as UserService from './user.service';
import { CommandHandlers, QueryHandlers, PortServices } from './Application';
import { PrismaUserRepository } from './Infrastructure/Repository/PrismaUserRepository';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QueueConstants, RepositoryProviders } from '../shared/Infrastructure';

console.log(PortServices);
@Module({
  imports: [
    ClientsModule.register([
      {
        name: QueueConstants.USER_CLIENT,
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
    ...Object.values(PortServices),
    ...Object.values(CommandHandlers),
    ...Object.values(QueryHandlers),
    {
      provide: RepositoryProviders.USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
