import { Controller, Get, Param } from '@nestjs/common';
import { UserFinder } from '../Domain/Services/Persistence';

@Controller('user')
export class UserFindById {
  constructor(private readonly findService: UserFinder) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findService.findOne(id);
  }
}
