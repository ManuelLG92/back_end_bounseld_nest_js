import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NativeLanguagesService } from './native-languages.service';
import { CreateNativeLanguageDto } from './dto/create-native-language.dto';
import { UpdateNativeLanguageDto } from './dto/update-native-language.dto';

@Controller('native-languages')
export class NativeLanguagesController {
  constructor(
    private readonly nativeLanguagesService: NativeLanguagesService,
  ) {}

  @Post()
  create(@Body() createNativeLanguageDto: CreateNativeLanguageDto) {
    return this.nativeLanguagesService.create(createNativeLanguageDto);
  }

  @Get()
  findAll() {
    return this.nativeLanguagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nativeLanguagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNativeLanguageDto: UpdateNativeLanguageDto,
  ) {
    return this.nativeLanguagesService.update(+id, updateNativeLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nativeLanguagesService.remove(+id);
  }
}
