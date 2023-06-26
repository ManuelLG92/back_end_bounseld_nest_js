import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGatewayModule } from './gateway/app.gateway.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GlobalsModule } from './globals/globals.module';
import { LearningLanguagesModule } from './learning-lenguages/learning-languages.module';
import { LanguageModule } from './lenguage/language.module';
import { NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}

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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('*');
  }
}
