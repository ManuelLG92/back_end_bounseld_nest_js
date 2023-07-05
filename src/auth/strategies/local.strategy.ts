import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../services';

@Injectable()
export class LocalStrategy implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const { email, password } = request.body;
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
