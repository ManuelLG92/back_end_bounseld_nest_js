import { Module } from '@nestjs/common';
import { NativeLanguagesService } from './native-languages.service';
import { NativeLanguagesController } from './native-languages.controller';

@Module({
  controllers: [NativeLanguagesController],
  providers: [NativeLanguagesService],
})
export class NativeLanguagesModule {}
