import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { UserRemover } from '../../Application/Port/Services';

@Controller('user')
export class RemoveUserController {
  constructor(private readonly remover: UserRemover) {}
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.remover.remove(id);
  }
}
