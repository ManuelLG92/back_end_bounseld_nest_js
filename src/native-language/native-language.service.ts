import { Injectable } from '@nestjs/common';
import { CreateNativeLanguageInput } from './dto/create-native-language.input';
import { UpdateNativeLanguageInput } from './dto/update-native-language.input';

@Injectable()
export class NativeLanguageService {
  create(createNativeLanguageInput: CreateNativeLanguageInput) {
    return 'This action adds a new nativeLanguage';
  }

  findAll() {
    return `This action returns all nativeLanguage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nativeLanguage`;
  }

  update(id: number, updateNativeLanguageInput: UpdateNativeLanguageInput) {
    return `This action updates a #${id} nativeLanguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} nativeLanguage`;
  }
}
