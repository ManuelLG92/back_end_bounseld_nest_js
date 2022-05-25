import { Body, Controller, Post } from '@nestjs/common';
import { RequestDetails } from 'src/decorators';
import { IRequestDetail } from 'src/shared/Util';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserCommand } from '../Application';
import { CommandBus } from '@nestjs/cqrs';

// import { UserProviderConstants } from '../constants/repository';

@Controller('user')
export class CreateUserController {
  constructor(private readonly commandBus: CommandBus) {}
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
}
