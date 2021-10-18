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

  async jwtCreateAndRefresh(id, ctx: IRequestDetail) {
    return {
      access_token: this.jwtService.sign({ id, ...ctx }),
    };
  }

  async checkData(req: any, payload: any) {
    // return req.ip === payload.ip && req.id === payload.id;
    return req.ip === payload.ip;
  }
}
