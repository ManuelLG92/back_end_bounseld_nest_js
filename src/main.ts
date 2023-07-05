import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { QueueConstants } from './shared/Infrastructure';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: '*',
    },
  });

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [QueueConstants.URL],
      queue: QueueConstants.MAIN_QUEUE,
      queueOptions: {
        durable: false,
      },
    },
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(3500);
  console.info(`Application started listening on port 3500 🚀`);
}

bootstrap().catch((e) => console.log(e));
