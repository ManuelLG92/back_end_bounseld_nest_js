import { Injectable } from '@nestjs/common';
import { CreateLearningLenguageDto } from './dto/create-learning-lenguage.dto';
import { UpdateLearningLenguageDto } from './dto/update-learning-lenguage.dto';

@Injectable()
export class LearningLenguagesService {
  create(createLearningLenguageDto: CreateLearningLenguageDto) {
    return 'This action adds a new learningLenguage';
  }

  findAll() {
    return `This action returns all learningLenguages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} learningLenguage`;
  }

  update(id: number, updateLearningLenguageDto: UpdateLearningLenguageDto) {
    return `This action updates a #${id} learningLenguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} learningLenguage`;
  }
}
