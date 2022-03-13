import { Controller, Get, Param } from '@nestjs/common';
import { FindService } from '../services';

@Controller('user')
export class UserFindById {
  constructor(private readonly findService: FindService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findService.findOne(id);
  }
}
