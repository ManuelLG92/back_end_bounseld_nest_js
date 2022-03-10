import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import * as Controllers from './controller/';
import * as VO from './VO';
@Module({
  controllers: [...Object.values(Controllers)],
  providers: [UserService, ...Object.values(VO)],
})
export class UserModule {}
