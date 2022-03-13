import { Body, Controller, Param, Patch } from '@nestjs/common';
//import { JwtAuthGuard } from 'src/auth/guards';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdateService } from '../services';

@Controller('user')
export class UserUpdater {
  constructor(private readonly userRestService: UpdateService) {}
  //@UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRestDto: UpdateUserDto) {
    console.log('user id patch', id);
    return this.userRestService.update(id, updateUserRestDto);
  }
}
