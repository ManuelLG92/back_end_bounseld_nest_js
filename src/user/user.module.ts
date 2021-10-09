import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import * as VO from './VO';
@Module({
  controllers: [UserController],
  providers: [UserService, ...Object.values(VO)],
})
export class UserModule {}
