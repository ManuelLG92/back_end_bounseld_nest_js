import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard, LocalAuthGuard } from '../auth/guards';
import { AuthService } from '../auth/auth.service';
import { IRequestDetail, RequestDetails } from '../decorators';

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
    console.log(`Login: user: ${req.ip} | ctx: ${JSON.stringify(ctx)}`);
    //this.logger.warn(`Login access user ${req.user.username} -- raw ${req.rawHeaders}`);
    return await this.authService.jwtCreateAndRefresh(req.user, ctx);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req) {
    return req.user;
  }

  @Get()
  findAll() {
    return this.userRestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRestService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRestDto: UpdateUserDto) {
    return this.userRestService.update(id, updateUserRestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRestService.remove(id);
  }
}
