import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RequestDetails } from 'src/decorators';
import { IRequestDetail } from 'src/shared/Util';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateUserCommand } from '../../Application';
import { CommandBus } from '@nestjs/cqrs';
import { JwtAuthGuard } from '../../../auth/guards';
import { Public } from '../../../decorators/public';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class CreateUserController {
  @Public()
  @Post()
  async create(
    @Body() createUserRestDto: CreateUserDto,
    @RequestDetails() ctx?: IRequestDetail,
  ) {
    console.log(createUserRestDto);
    return await this.commandBus.execute(
      new CreateUserCommand({ ...createUserRestDto, ctx: ctx }),
    );
  }

  constructor(private readonly commandBus: CommandBus) {}
}
