import { Module } from '@nestjs/common';
import { CountryApiService } from './country-api.service';
import { CountryApiController } from './country-api.controller';

@Module({
  controllers: [CountryApiController],
  providers: [CountryApiService],
})
export class CountryApiModule {}
