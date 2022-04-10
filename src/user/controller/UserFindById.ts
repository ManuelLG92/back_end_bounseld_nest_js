import { Controller, Get, Param } from '@nestjs/common';
import { UserFinder } from '../Application/Port/Services';

@Controller('user')
export class UserFindById {
  constructor(private readonly findService: UserFinder) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findService.findOne(id);
  }
}
