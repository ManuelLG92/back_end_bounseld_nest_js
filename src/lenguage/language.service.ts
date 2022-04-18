import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';

@Injectable()
export class LanguageService {
  create(createLenguageDto: CreateLanguageDto) {
    return 'This action adds a new lenguage';
  }

  findAll() {
    return `This action returns all lenguage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lenguage`;
  }

  update(id: number, updateLenguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} lenguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} lenguage`;
  }
}
