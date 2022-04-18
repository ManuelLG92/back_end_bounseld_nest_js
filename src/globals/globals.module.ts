import { Global, Module } from '@nestjs/common';
import { GlobalsService } from './globals.service';
import { GlobalsController } from './globals.controller';

@Global()
@Module({
  controllers: [GlobalsController],
  providers: [GlobalsService],
  exports: [GlobalsService],
})
export class GlobalsModule {}
