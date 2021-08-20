import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TestKafkaService } from './test-kafka.service';

@Controller()
export class TestKafkaController {
  constructor(private readonly testKafkaService: TestKafkaService) {}

  @MessagePattern('send_email_smtp')
  testingKafkareceiver(@Payload() message) {
    message = message.value;
    console.log(message);
    return {
      received: 'Confirmation email send to: ' + message.key,
    };
  }
}
