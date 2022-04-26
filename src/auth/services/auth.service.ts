import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IRequestDetail, TJwt } from '../../shared/Util';
import { PrismaService } from '../../prisma/prisma.service';
import { GlobalsService } from '../../globals/globals.service';
import * as _ from 'lodash';

type jwtDataCheck = {
  ip?: string;
  hostname?: string;
  userAgent?: string;
};

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }

  async jwtCreateAndRefresh(user: any, ctx: IRequestDetail) {
    return {
      accessToken: this.jwtService.sign({
        id: user.id,
        email: user.email,
        password: user.password,
        ...ctx,
      }),
    };
  }

  async checkData(jwt: TJwt, ctx: IRequestDetail) {
    const check = _.isEqual(
      await this.jwtGetCheckType(jwt),
      await this.reqGetCheckType(ctx),
    );
    if (!check) {
      throw new UnauthorizedException('Access forbidden');
    }
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

  async validateLogin(passwordPlain: string, passwordHashed: string) {
    return await GlobalsService.compareEncryptedData(
      passwordPlain,
      passwordHashed,
    );
  }

  async authFindUserByEmail(email: string) {
    return await this.prismaService.user.findFirst({
      where: { email },
    });
  }

  async authCheckSameUser(req: any, requestId: string) {
    const dbUser = await this.prismaService.user.findFirst({
      where: {
        id: req.user.id,
        email: req.user.email,
      },
    });
    if (dbUser?.id !== requestId) {
      throw new BadRequestException('Bad Request');
    }
    return dbUser;
  }
}
