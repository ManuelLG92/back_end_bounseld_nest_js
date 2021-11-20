import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ email: 'email', password: 'password' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.findUser(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!(await this.authService.validateLogin(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return email;
  }
}
