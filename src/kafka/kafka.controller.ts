import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Controller()
export class KafkaController implements OnModuleInit {
  private kafkaProducer: Producer;
  constructor(
    @Inject('KAFKA_MODULE_BROKER')
    private clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    this.clientKafka.subscribeToResponseOf('send_email_smtp');
    this.kafkaProducer = await this.clientKafka.connect();
  }

  @Get('testing')
  async testingKafka() {
    const result = await this.kafkaProducer.send({
      topic: 'testing',
      messages: [
        {
          key: Math.random() + '',
          value: JSON.stringify({
            order: 1000,
            client: 'testing',
          }),
        },
      ],
    });
    console.log(result);
  }

  @MessagePattern('send_email')
  sendEmail(@Payload() message) {
    console.log('Se recibe en kafka.controller send_email');
    message = message.value;
    console.log(message);
    this.clientKafka
      .send('send_email_smtp', JSON.stringify({ key: `${message.email} processing` }))
      .subscribe((reply) => console.log(reply));
  }

/*   @MessagePattern('testing')
  testingKafkareceiver(@Payload() message) {
    console.log('Se recibe en testimg user.resolver kafka controller');
    message = message.value;
    console.log(message);
    return {
      received: "testing controll kafka " + message.key,
    }

  } */
}
