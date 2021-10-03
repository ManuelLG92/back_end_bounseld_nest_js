import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/prisma/prisma/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  /*  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_BROKER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero', // hero-server
            brokers: ['localhost:9094'],
          },
          consumer: {
            groupId: 'my-consumer-nest',
          },
        },
      },
    ]),
  ],*/
  providers: [UserResolver, UserService],
})
export class UserModule {}
