import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
//import { RedisClient } from '../redis';
import { AppRedisService } from './app.gateway.service';

@Module({
  imports: [],
  providers: [AppGateway, AppRedisService],
})
export class AppGatewayModule {}
