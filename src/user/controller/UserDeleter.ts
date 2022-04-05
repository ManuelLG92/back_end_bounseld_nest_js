import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { UserRemover } from '../Domain/Services/Persistence';

@Controller('user')
export class UserDeleter {
  constructor(private readonly remover: UserRemover) {}
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remover.remove(id);
  }
}
