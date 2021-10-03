import {
  Body,
  Delete,
  Get,
  Injectable,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCountryApiDto } from './dto/create-country-api.dto';
import { UpdateCountryApiDto } from './dto/update-country-api.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';

@Injectable()
export class CountryApiService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.country.findMany({});
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.prismaService.country.findUnique({
      where: { id },
    });
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: UpdateCountryApiDto) {
    let country = await this.prismaService.country.findUnique({
      where: { id },
    });
    if (!country) throw NotFoundException;

    country = await this.prismaService.country.update({
      where: { id },
      data: data,
    });
    return country;
  }

  @Post()
  async create(createCountryApiDto: CreateCountryApiDto) {
    return await this.prismaService.country.create({
      data: createCountryApiDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      await this.prismaService.country.delete({
        where: { id: id },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
