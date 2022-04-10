import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { RequestDetails } from 'src/decorators';
import { IRequestDetail } from 'src/util';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserFinder, UserSaver } from '../Application/Port/Services';

@Controller('user')
export class UserCreator {
  constructor(
    private readonly saver: UserSaver,
    private readonly finder: UserFinder,
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
    return await this.saver.save({ ...createUserRestDto, ctx: ctx });
  }
}
