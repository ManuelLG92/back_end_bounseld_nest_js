import { Controller, Get, Param } from '@nestjs/common';
import { FindUserService } from '../services';

@Controller('user')
export class UserFindById {
  constructor(private readonly findService: FindUserService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findService.findOne(id);
  }
}
