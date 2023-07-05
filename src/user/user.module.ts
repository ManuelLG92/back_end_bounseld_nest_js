import { Module } from '@nestjs/common';
import * as Controllers from './Controller/Rest';
// import * as UserService from './user.service';

import { PrismaUserRepository } from './Infrastructure/Repository/PrismaUserRepository';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QueueConstants, RepositoryProviders } from '../shared/Infrastructure';
import { CreateUserCommandHandler } from './Application/UseCases/Create/CreateUserCommandHandler';
import { FindUserByIdQueryHandler, GetLanguages } from './Application/UseCases';
import { UpdateUserCommandHandler } from './Application/UseCases/Update/UpdateUserCommandHandler';
import {
  UserFinder,
  UserRemover,
  UserSaver,
} from './Application/Port/Services';

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
    CreateUserCommandHandler,
    UpdateUserCommandHandler,
    FindUserByIdQueryHandler,
    UserSaver,
    UserFinder,
    UserRemover,
    GetLanguages,
    {
      provide: RepositoryProviders.USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
