import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { AppGatewayModule } from './gateway/app.gateway.module';
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma/prisma.module';
import { NativeLanguageModule } from './native-language/native-language.module';
import { LearningLanguageModule } from './learning-language/learning-language.module';
import { CountryModule } from './country/country.module';
import { LanguageModule } from './language/language.module';
import { ReportModule } from './report/report.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      introspection: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AppGatewayModule,
    UserModule,
    PrismaModule,
    NativeLanguageModule,
    LearningLanguageModule,
    CountryModule,
    LanguageModule,
    ReportModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
