import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('validate req', username, password);

    // const user = await this.authService.validateUser(username, password);
    if (username === 'test' && password === 'test') {
      return username;
    }
    throw new UnauthorizedException();
  }
}
