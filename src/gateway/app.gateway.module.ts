import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
//import { RedisClient } from '../redis';
import { AppGatewayService } from './app.gateway.service';

@Module({
  imports: [],
  providers: [AppGateway, AppGatewayService],
})
export class AppGatewayModule {}
