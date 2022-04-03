import { Module } from '@nestjs/common';
import * as Controllers from './controller/';
import * as Services from './services/';
import * as VO from './VO';
import { PrismaUserRepository } from './Infrastructure/Repository/PrismaUserRepository';
import { UserProviders } from './constants/repository';

@Module({
  controllers: [...Object.values(Controllers)],
  providers: [
    ...Object.values(Services),
    ...Object.values(VO),
    {
      provide: UserProviders.USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
