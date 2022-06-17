import { Controller, Get, Param } from '@nestjs/common';
import { UserFinder } from '../../Application/Port/Services';

@Controller('user')
export class FindUserByIdController {
  constructor(private readonly findService: UserFinder) {}
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.findService.findOne(id);
  }
}
