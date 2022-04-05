import { Controller, Get } from '@nestjs/common';
import { UserFinder } from '../Domain/Services/Persistence';

@Controller('user')
export class UserFindAll {
  constructor(private readonly findService: UserFinder) {}
  @Get()
  findAll() {
    return this.findService.findAll();
  }
}
