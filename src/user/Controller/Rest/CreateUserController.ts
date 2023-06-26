import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RequestDetails } from 'src/decorators';
import { IRequestDetail } from 'src/shared/Util';
import { CreateUserDto } from '../../dto/create-user.dto';
import { JwtAuthGuard } from '../../../auth/guards';
import { Public } from '../../../decorators/public';
import { CreateUserCommandHandler } from '../../Application/UseCases/Create/CreateUserCommandHandler';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class CreateUserController {
  @Public()
  @Post()
  async create(
    @Body() createUserRestDto: CreateUserDto,
    @RequestDetails() ctx?: IRequestDetail,
  ) {
    return this.handler.execute({ ...createUserRestDto, ctx: ctx });
  }

  constructor(private readonly handler: CreateUserCommandHandler) {}
}
