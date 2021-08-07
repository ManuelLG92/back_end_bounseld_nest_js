import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsController } from './recordsController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from './entity/records.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  providers: [RecordsService],
  controllers: [RecordsController],
})
export class RecordsModule {}
