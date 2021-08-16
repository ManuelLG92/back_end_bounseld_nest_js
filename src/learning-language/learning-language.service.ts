import { Injectable } from '@nestjs/common';
import { CreateLearningLanguageInput } from './dto/create-learning-language.input';
import { UpdateLearningLanguageInput } from './dto/update-learning-language.input';

@Injectable()
export class LearningLanguageService {
  create(createLearningLanguageInput: CreateLearningLanguageInput) {
    return 'This action adds a new learningLanguage';
  }

  findAll() {
    return `This action returns all learningLanguage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} learningLanguage`;
  }

  update(id: number, updateLearningLanguageInput: UpdateLearningLanguageInput) {
    return `This action updates a #${id} learningLanguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} learningLanguage`;
  }
}
