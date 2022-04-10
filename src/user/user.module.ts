import { Module } from '@nestjs/common';
import * as Controllers from './controller/';
import * as VO from './VO';
import { CommandHandlers, PortServices } from './Application';
import { PrismaUserRepository } from './Infrastructure/Repository/PrismaUserRepository';
import { UserProviderConstants } from './constants/repository';

@Module({
  controllers: [...Object.values(Controllers)],
  providers: [
    ...Object.values(VO),
    ...Object.values(PortServices),
    ...Object.values(CommandHandlers),
    {
      provide: UserProviderConstants.USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
