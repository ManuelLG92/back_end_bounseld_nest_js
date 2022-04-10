import { Body, Controller, Param, Patch } from '@nestjs/common';
//import { JwtAuthGuard } from 'src/auth/guards';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserSaver } from '../Application/Port/Services';
import { User } from '../Domain/User';

@Controller('user')
export class UserUpdater {
  constructor(private readonly userRestService: UserSaver) {}
  //@UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRestDto: UpdateUserDto) {
    console.log('user id patch', id);
    return this.userRestService.save({
      ...User.fromObject(updateUserRestDto),
    });
  }
}
