import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { UserRemover } from '../Application/Port/Services';

@Controller('user')
export class UserRemoverController {
  constructor(private readonly remover: UserRemover) {}
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remover.remove(id);
  }
}
