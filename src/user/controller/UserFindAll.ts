import { Controller, Get } from '@nestjs/common';
import { FindService } from '../services';

@Controller('user')
export class UserFindAll {
  constructor(private readonly findService: FindService) {}
  @Get()
  findAll() {
    console.log('enter');
    return this.findService.findAll();
  }
}
