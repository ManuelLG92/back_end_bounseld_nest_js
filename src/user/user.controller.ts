import {
  // BadRequestException,
  // Incoming,
  Controller,
  // Delete,
  // Get,
  // Param,
  // Patch,
  // Post,
  // Req,
  // UseGuards,
} from '@nestjs/common';
// import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { JwtAuthGuard, LocalAuthGuard } from '../auth/guards';
// import { AuthService } from '../auth/services';
// import { Auth, RequestDetails } from '../decorators';
// import { IRequestDetail } from '../Util';
// import { UserDto } from './dto/userDto';

@Controller('user')
export class UserController {
  /*
  constructor(
    private readonly userRestService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(
    @Incoming() createUserRestDto: CreateUserDto,
    @RequestDetails() ctx?: IRequestDetail,
  ) {
    if (await this.userRestService.findOneByEmail(createUserRestDto.email)) {
      throw new BadRequestException(
        `User ${createUserRestDto.email} already registered.`,
      );
    }
    console.log('enter');
    const user = await this.userRestService.create(createUserRestDto, ctx);
    return JSON.stringify({ id: user.id });
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req, @RequestDetails() ctx: IRequestDetail) {
    console.warn(
      `Login: user: ${JSON.stringify(req.user)} | ctx: ${JSON.stringify(ctx)}`,
    );
    return {
      ...(await this.authService.jwtCreateAndRefresh(req.user, ctx)),
      ...new UserDto(req.user),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(
    @Req() req,
    @Auth() auth,
    @RequestDetails() ctx: IRequestDetail,
  ) {
    // console.log('req user', req.user);
    return await this.authService.jwtCreateAndRefresh(req.user, ctx);
  }

  @Get()
  findAll() {
    console.log('enter');
    return this.userRestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRestService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Incoming() updateUserRestDto: UpdateUserDto) {
    return this.userRestService.update(id, updateUserRestDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRestService.remove(id);
  }*/
}
