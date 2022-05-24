import { Injectable } from '@nestjs/common';
import { CreateNativeLanguageDto } from './dto/create-native-language.dto';
import { UpdateNativeLanguageDto } from './dto/update-native-language.dto';

@Injectable()
export class NativeLanguagesService {
  create(createNativeLanguageDto: CreateNativeLanguageDto) {
    return 'This action adds a new nativeLanguage';
  }

  findAll() {
    return `This action returns all nativeLanguages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nativeLanguage`;
  }

  update(id: number, updateNativeLanguageDto: UpdateNativeLanguageDto) {
    return `This action updates a #${id} nativeLanguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} nativeLanguage`;
  }
}
