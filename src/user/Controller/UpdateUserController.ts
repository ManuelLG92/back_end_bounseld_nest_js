import { Body, Controller, Param, Patch } from '@nestjs/common';
//import { JwtAuthGuard } from 'src/auth/guards';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CommandBus } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../Application';
import { RequestDetails } from '../../decorators';
import { IRequestDetail } from '../../shared/Util';

// import { UserSaver } from '../Application/Port/Services';

@Controller('user')
export class UpdateUserController {
  constructor(private readonly commandBus: CommandBus) {}
  //@UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserRestDto: UpdateUserDto,
    @RequestDetails() ctx?: IRequestDetail,
  ) {
    console.log('user id patch', id, 'data', updateUserRestDto);

    await this.commandBus.execute(
      new UpdateUserCommand(id, { ...updateUserRestDto, ctx: ctx }),
    );
    return 'ok';
    /*return this.userRestService.save({
      ...User.fromObject(updateUserRestDto),
    });*/
  }
}
