import { Module } from '@nestjs/common';
//import { UserService } from './user.service';
import * as Controllers from './controller/';
import * as Services from './services/';
import * as VO from './VO';
@Module({
  controllers: [...Object.values(Controllers)],
  providers: [...Object.values(Services), ...Object.values(VO)],
})
export class UserModule {}
