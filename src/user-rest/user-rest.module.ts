import { Module } from '@nestjs/common';
import { UserRestService } from './user-rest.service';
import { UserRestController } from './user-rest.controller';
import * as VO from './VO';
@Module({
  controllers: [UserRestController],
  providers: [UserRestService, ...Object.values(VO)],
})
export class UserRestModule {}
