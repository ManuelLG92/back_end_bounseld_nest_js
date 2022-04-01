import { Controller, Get } from '@nestjs/common';
import { FindUserService } from '../services';

@Controller('user')
export class UserFindAll {
  constructor(private readonly findService: FindUserService) {}
  @Get()
  findAll() {
    console.log('enter');
    return this.findService.findAll();
  }
}
