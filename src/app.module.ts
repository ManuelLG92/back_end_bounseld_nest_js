import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './gateway/app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RecordsModule } from './records/records.module';
import { RecordsService } from './records/records.service';
import { RecordsController } from './records/recordsController';
import { AppGatewayModule } from './gateway/app.gateway.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bounsel',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema: true,
    }),
    UsersModule,
    RecordsModule,
    AppGatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
