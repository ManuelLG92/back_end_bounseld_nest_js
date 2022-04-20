import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LearningLanguagesService } from './learning-languages.service';
import { CreateLearningLanguageDto } from './dto/create-learning-language.dto';
import { UpdateLearningLanguageDto } from './dto/update-learning-language.dto';

@Controller('learning-lenguages')
export class LearningLaguagesController {
  constructor(
    private readonly learningLenguagesService: LearningLanguagesService,
  ) {}

  @Post()
  create(@Body() createLearningLanguageDto: CreateLearningLanguageDto) {
    return this.learningLenguagesService.create(createLearningLanguageDto);
  }

  @Get()
  findAll() {
    return this.learningLenguagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.learningLenguagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLearningLanguageDto: UpdateLearningLanguageDto,
  ) {
    return this.learningLenguagesService.update(+id, updateLearningLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learningLenguagesService.remove(+id);
  }
}
