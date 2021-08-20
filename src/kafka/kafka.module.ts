import { Global, Module } from '@nestjs/common';

import { KafkaController } from './kafka.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_MODULE_BROKER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero', // hero-server
            brokers: ['localhost:9094'],
          },
          consumer: {
            groupId: 'my-consumer-nest-kafka-module',
          },
        },
      },
    ]),
  ],
  controllers: [KafkaController],
})
export class KafkaModule {}
