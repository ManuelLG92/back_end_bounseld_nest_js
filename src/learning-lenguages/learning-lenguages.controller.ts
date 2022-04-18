import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LearningLenguagesService } from './learning-lenguages.service';
import { CreateLearningLenguageDto } from './dto/create-learning-lenguage.dto';
import { UpdateLearningLenguageDto } from './dto/update-learning-lenguage.dto';

@Controller('learning-lenguages')
export class LearningLenguagesController {
  constructor(
    private readonly learningLenguagesService: LearningLenguagesService,
  ) {}

  @Post()
  create(@Body() createLearningLenguageDto: CreateLearningLenguageDto) {
    return this.learningLenguagesService.create(createLearningLenguageDto);
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
    @Body() updateLearningLenguageDto: UpdateLearningLenguageDto,
  ) {
    return this.learningLenguagesService.update(+id, updateLearningLenguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learningLenguagesService.remove(+id);
  }
}
