import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IRequestDetail, TJwt } from '../util';
import * as _ from 'lodash';

type jwtDataCheck = {
  ip?: string;
  hostname?: string;
  userAgent?: string;
};

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

  async checkData(jwt: TJwt, context: IRequestDetail) {
    return _.isEqual(
      await this.jwtGetCheckType(jwt),
      await this.reqGetCheckType(context),
    );
  }

  async reqGetCheckType(req: IRequestDetail): Promise<jwtDataCheck> {
    return {
      ip: req.ip,
      hostname: req.hostname,
      userAgent: req.userAgent,
    };
  }
  async jwtGetCheckType(jwt: TJwt): Promise<jwtDataCheck> {
    return {
      ip: jwt.ip,
      hostname: jwt.hostname,
      userAgent: jwt.userAgent,
    };
  }
}
