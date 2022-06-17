import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
//import { RedisClient } from '../redis';
import { AppGatewayService } from './app.gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QueueConstants } from '../shared/Infrastructure';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: QueueConstants.GATEWAY_CLIENT,
        transport: Transport.RMQ,
        options: {
          urls: [QueueConstants.URL],
          queue: QueueConstants.MAIN_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [AppGateway, AppGatewayService],
})
export class AppGatewayModule {}
