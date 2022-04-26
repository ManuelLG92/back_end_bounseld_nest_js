import { Module } from '@nestjs/common';
import { NativeLanguagesService } from './native-languages.service';
import { NativeLanguagesController } from './native-languages.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QueueConstants } from '../shared/Infrastructure';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: QueueConstants.NATIVE_LANGUAGE_CLIENT,
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
  controllers: [NativeLanguagesController],
  providers: [NativeLanguagesService],
})
export class NativeLanguagesModule {}
