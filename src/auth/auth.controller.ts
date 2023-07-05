import {
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Response,
} from '@nestjs/common';
import { AuthService } from './services';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards';
import { RequestDetails } from '../decorators';
import { IRequestDetail } from '../shared/Util';
import { UserDto } from '../user/dto/userDto';
import { LocalStrategy } from './strategies';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    console.log('message', req.message, 'user:', req.user);
    return this.authService.googleLogin(req);
  }

  @UseGuards(LocalStrategy)
  @Post('login')
  async login(
    @Req() req,
    @RequestDetails() ctx: IRequestDetail,
    @Response() res,
  ) {
    console.warn(
      `Login: user: ${JSON.stringify(req.user)} | ctx: ${JSON.stringify(ctx)}`,
    );

    const JWT = await this.authService.jwtCreateAndRefresh(req.user, ctx);
    const id = new UserDto(req.user).id;
    return res.set({ 'x-access-token': JWT }).json({ id });
  }

  @Get('guard')
  @UseGuards(JwtAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  async testJwtGuard(@Req() req) {
    return 'allowed';
  }
}
