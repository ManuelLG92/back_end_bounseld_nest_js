import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import * as strategies from './strategies';
import * as guards from './guards';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SIGN,
      signOptions: { expiresIn: '1200s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    ...Object.values(strategies),
    ...Object.values(guards),
  ],
  exports: [AuthService],
})
export class AuthModule {}
