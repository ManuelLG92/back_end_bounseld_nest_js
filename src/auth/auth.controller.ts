import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './services';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    console.log('message', req.message, 'user:', req.user);
    return this.authService.googleLogin(req);
  }
}
