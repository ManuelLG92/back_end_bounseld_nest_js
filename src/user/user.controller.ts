import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard, LocalAuthGuard } from '../auth/guards';
import { AuthService } from '../auth/services';
import { Auth, RequestDetails } from '../decorators';
import { IRequestDetail } from '../util';

@Controller('user')
export class UserController {
  constructor(
    private readonly userRestService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  create(
    @Body() createUserRestDto: CreateUserDto,
    @RequestDetails() ctx?: IRequestDetail,
  ) {
    return this.userRestService.create(createUserRestDto, ctx);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req, @RequestDetails() ctx: IRequestDetail) {
    console.warn(`Login: user: ${req.user} | ctx: ${JSON.stringify(ctx)}`);
    return await this.authService.jwtCreateAndRefresh(req.user, ctx);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(
    @Req() req,
    @Auth() auth,
    @RequestDetails() ctx: IRequestDetail,
  ) {
    // await this.authService.checkData(req.user, ctx);
    return await this.authService.jwtCreateAndRefresh(req.user, ctx);
  }

  @Get()
  findAll() {
    return this.userRestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRestService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRestDto: UpdateUserDto) {
    return this.userRestService.update(id, updateUserRestDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRestService.remove(id);
  }
}
