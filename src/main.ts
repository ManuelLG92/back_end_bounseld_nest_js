import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /*    app.connectMicroservice({
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'hero', // hero-server
          brokers: ['localhost:9094'],
        },
        consumer: {
          groupId: 'my-consumer-' + Math.random(),
        },
      },
    });*/

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.startAllMicroservices();
  await app.listen(3500);
}

bootstrap();
