import { Module } from '@nestjs/common';
import { TestKafkaService } from './test-kafka.service';
import { TestKafkaController } from './test-kafka.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_MODULE_BROKER_TEST',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero', // hero-server
            brokers: ['localhost:9094'],
          },
          consumer: {
            groupId: 'my-consumer-nest-kafka-test',
          },
        },
      },
    ]),
  ],
  controllers: [TestKafkaController],
  providers: [TestKafkaService],
})
export class TestKafkaModule {}
