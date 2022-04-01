import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { RequestDetails } from 'src/decorators';
import { IRequestDetail } from 'src/util';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserService, FindUserService } from '../services';

@Controller('user')
export class UserCreator {
  constructor(
    private readonly saver: CreateUserService,
    private readonly finder: FindUserService,
  ) {}
  @Post()
  async create(
    @Body() createUserRestDto: CreateUserDto,
    @RequestDetails() ctx?: IRequestDetail,
  ) {
    if (await this.finder.findOneByEmail(createUserRestDto.email)) {
      throw new BadRequestException(
        `User ${createUserRestDto.email} already registered.`,
      );
    }
    const user = await this.saver.create(createUserRestDto, ctx);
    return JSON.stringify({ id: user.id });
  }
}
