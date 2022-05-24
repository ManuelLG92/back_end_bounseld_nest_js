import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGatewayModule } from './gateway/app.gateway.module';
import { PrismaModule } from './prisma/prisma.module';
/*import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaModule } from './kafka/kafka.module';
import { TestKafkaModule } from './test-kafka/test-kafka.module';*/
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GlobalsModule } from './globals/globals.module';
//import { LoggerModule } from 'nestjs-pino';
import { NativeLanguagesModule } from './native-languages/native-languages.module';
import { LearningLanguagesModule } from './learning-lenguages/learning-languages.module';
import { LanguageModule } from './lenguage/language.module';

@Module({
  imports: [
    //LoggerModule.forRoot(),
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
    NativeLanguagesModule,
    LearningLanguagesModule,
    LanguageModule,
    // TestKafkaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
