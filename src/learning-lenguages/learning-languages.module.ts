import { Module } from '@nestjs/common';
import { LearningLanguagesService } from './learning-languages.service';
import { LearningLaguagesController } from './learning-laguages.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QueueConstants } from '../shared/Infrastructure';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: QueueConstants.LEARNING_LANGUAGE_CLIENT,
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
    CqrsModule,
  ],
  controllers: [LearningLaguagesController],
  providers: [LearningLanguagesService],
})
export class LearningLanguagesModule {}
