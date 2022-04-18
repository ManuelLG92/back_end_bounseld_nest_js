import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './services';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards';
import { RequestDetails } from '../decorators';
import { IRequestDetail } from '../util';
import { UserDto } from '../user/dto/userDto';

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

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @RequestDetails() ctx: IRequestDetail) {
    console.warn(
      `Login: user: ${JSON.stringify(req.user)} | ctx: ${JSON.stringify(ctx)}`,
    );
    return {
      ...(await this.authService.jwtCreateAndRefresh(req.user, ctx)),
      id: new UserDto(req.user).id,
    };
  }
}
