import { Controller, Get, Param } from '@nestjs/common';
import { LanguageFinder } from '../../Application/Port/Services';

@Controller('languages')
export class FindByCodeController {
  constructor(private readonly finder: LanguageFinder) {}

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.finder.find(code);
  }

  @Get('all')
  findAll() {
    return this.finder.findAll();
  }
}
