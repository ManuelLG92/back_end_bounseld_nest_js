import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { DeleteService } from '../services';

@Controller('user')
export class UserDeleter {
  constructor(private readonly userRestService: DeleteService) {}
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRestService.remove(id);
  }
}