import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGatewayModule } from './gateway/app.gateway.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GlobalsModule } from './globals/globals.module';
//import { LoggerModule } from 'nestjs-pino';
import { LearningLanguagesModule } from './learning-lenguages/learning-languages.module';
import { LanguageModule } from './lenguage/language.module';
// import { JwtAuthGuard } from './auth/guards';
// import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    //LoggerModule.forRoot(),
    GlobalsModule,
    AppGatewayModule,
    PrismaModule,
    UserModule,
    AuthModule,
    LearningLanguagesModule,
    LanguageModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    /*{
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },*/
  ],
})
export class AppModule {}
