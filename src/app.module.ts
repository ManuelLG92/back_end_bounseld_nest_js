import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGatewayModule } from './gateway/app.gateway.module';
import { PrismaModule } from './prisma/prisma/prisma.module';
/*import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaModule } from './kafka/kafka.module';
import { TestKafkaModule } from './test-kafka/test-kafka.module';*/
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GlobalsModule } from './globals/globals.module';
@Module({
  imports: [
    /*    GraphQLModule.forRoot({
      cors: {
        origin: 'http://localhost:8080',
        credentials: true,
      },
      introspection: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),*/
    GlobalsModule,
    AppGatewayModule,
    PrismaModule,
    // KafkaModule,
    UserModule,
    AuthModule,
    // TestKafkaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
