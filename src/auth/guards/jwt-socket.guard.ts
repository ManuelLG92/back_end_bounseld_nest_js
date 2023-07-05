import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../../decorators/public';

@Injectable()
export class JwtSocketGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    if (this.isPublic(context)) {
      return true;
    }
    const request = context.switchToWs().getClient<any>();
    console.log('req', request.handshake);
    return true;
  }

  private isPublic(context: ExecutionContext) {
    return this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
  }
}
