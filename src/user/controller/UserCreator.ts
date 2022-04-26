import { Body, Controller, Post } from '@nestjs/common';
import { RequestDetails } from 'src/decorators';
import { IRequestDetail } from 'src/shared/Util';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserFinder, UserSaver } from '../Application/Port/Services';
import { CreateUserCommand } from '../Application';
import { CommandBus } from '@nestjs/cqrs';
// import { UserProviderConstants } from '../constants/repository';

@Controller('user')
export class UserCreator {
  constructor(
    private readonly saver: UserSaver,
    private readonly finder: UserFinder,
    private readonly commandBus: CommandBus /* @Inject(UserProviderConstants.USER_REPOSITORY)
    private userRepositoryPort: UserRepositoryPort,*/,
  ) {}
  @Post()
  async create(
    @Body() createUserRestDto: CreateUserDto,
    @RequestDetails() ctx?: IRequestDetail,
  ) {
    console.log(createUserRestDto);
    await this.commandBus.execute(
      new CreateUserCommand({ ...createUserRestDto, ctx: ctx }),
    );
    console.log('passed');
    /*if (await this.finder.findOneByEmail(createUserRestDto.email)) {
      throw new BadRequestException(
        `User ${createUserRestDto.email} already registered.`,
      );
    }*/

    return 'created';
    // return await this.saver.save({ ...createUserRestDto, ctx: ctx });
  }
}
