import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CountryApiService } from './country-api.service';
import { CreateCountryApiDto } from './dto/create-country-api.dto';
import { UpdateCountryApiDto } from './dto/update-country-api.dto';

@Controller('country-api')
export class CountryApiController {
  constructor(private readonly countryApiService: CountryApiService) {}

  @Post()
  create(@Body() createCountryApiDto: CreateCountryApiDto) {
    return this.countryApiService.create(createCountryApiDto);
  }

  @Get()
  findAll() {
    return this.countryApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryApiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCountryApiDto: UpdateCountryApiDto,
  ) {
    return this.countryApiService.update(+id, updateCountryApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryApiService.remove(+id);
  }
}
