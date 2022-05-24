import { Injectable } from '@nestjs/common';
import { CreateLearningLanguageDto } from './dto/create-learning-language.dto';
import { UpdateLearningLanguageDto } from './dto/update-learning-language.dto';

@Injectable()
export class LearningLanguagesService {
  create(createLearningLenguageDto: CreateLearningLanguageDto) {
    return 'This action adds a new learningLenguage';
  }

  findAll() {
    return `This action returns all learningLenguages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} learningLenguage`;
  }

  update(id: number, updateLearningLenguageDto: UpdateLearningLanguageDto) {
    return `This action updates a #${id} learningLenguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} learningLenguage`;
  }
}
