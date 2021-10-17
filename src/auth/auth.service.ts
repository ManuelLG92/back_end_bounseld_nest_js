import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IRequestDetail } from '../decorators';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }

  async jwtCreateAndRefresh(payload, ctx: IRequestDetail) {
    return {
      access_token: this.jwtService.sign({ payload, ...ctx }),
    };
  }
}
