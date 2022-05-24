import { CacheModule, Global, Module } from '@nestjs/common';
import * as services from './services';
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
    CacheModule.register(),
  ],
  controllers: [AuthController],
  providers: [
    ...Object.values(services),
    ...Object.values(strategies),
    ...Object.values(guards),
  ],
  exports: [...Object.values(services)],
})
export class AuthModule {}
