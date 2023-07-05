import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { RequestDetails } from '../../../decorators';
import { IRequestDetail } from '../../../shared/Util';
import { UpdateUserCommandHandler } from '../../Application/UseCases/Update/UpdateUserCommandHandler';

@Controller('user')
export class UpdateUserController {
  constructor(private readonly commandBus: UpdateUserCommandHandler) {}
  //@UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserRestDto: UpdateUserDto,
    @RequestDetails() ctx?: IRequestDetail,
  ) {
    console.log('user id patch', id, 'data', updateUserRestDto);

    const obj = {
      id,
      data: { ...updateUserRestDto, ctx: ctx },
    };
    await this.commandBus.execute(obj);
    return 'ok';
    /*return this.userRestService.save({
      ...User.fromObject(updateUserRestDto),
    });*/
  }
}
