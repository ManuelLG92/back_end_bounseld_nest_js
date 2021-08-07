import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppGateway } from './app.gateway';
import { Record } from '../records/entity/records.entity';
import { RecordsService } from '../records/records.service';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  providers: [RecordsService, AppGateway],
})
export class AppGatewayModule {}
