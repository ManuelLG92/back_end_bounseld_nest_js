import { Controller, Get } from '@nestjs/common';
import { UserFinder } from '../../Application/Port/Services';

@Controller('user')
export class FindAllUsersController {
  constructor(private readonly findService: UserFinder) {}
  @Get()
  findAll() {
    return this.findService.findAll();
  }
}
