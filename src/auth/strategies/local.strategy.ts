import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email', passwordField: 'password' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.authFindUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Email y/o password not valid. ');
    }
    if (!(await this.authService.validateLogin(password, user.password))) {
      throw new UnauthorizedException('Email y/o password not valid.');
    }
    return user;
  }
}
