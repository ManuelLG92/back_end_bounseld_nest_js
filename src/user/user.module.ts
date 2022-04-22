import { Module } from '@nestjs/common';
import * as Controllers from './controller';
// import * as UserService from './user.service';
import { CommandHandlers, PortServices } from './Application';
import { PrismaUserRepository } from './Infrastructure/Repository/PrismaUserRepository';
import { UserProviderConstants } from './constants/repository';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [CqrsModule, PrismaModule],
  controllers: [...Object.values(Controllers)],
  providers: [
    ...Object.values(PortServices),
    ...Object.values(CommandHandlers),
    // ...Object.values(UserService),
    {
      provide: UserProviderConstants.USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
