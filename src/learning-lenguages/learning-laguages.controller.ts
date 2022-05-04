import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LearningLanguagesService } from './learning-languages.service';
import { CreateLearningLanguageDto } from './dto/create-learning-language.dto';
import { UpdateLearningLanguageDto } from './dto/update-learning-language.dto';
import { ClientProxy } from '@nestjs/microservices';
import { QueueConstants } from '../shared/Infrastructure';
import EventConstants from '../shared/Domain/Constants/Events/EventConstants';
import { lastValueFrom } from 'rxjs';

@Controller('learning-lenguages')
export class LearningLaguagesController implements OnModuleInit {
  constructor(
    private readonly learningLenguagesService: LearningLanguagesService,
    @Inject(QueueConstants.LEARNING_LANGUAGE_CLIENT)
    private client: ClientProxy,
  ) {}

  async onModuleInit() {
    await this.client.connect();
  }
  @Post()
  create(@Body() createLearningLanguageDto: CreateLearningLanguageDto) {
    return this.learningLenguagesService.create(createLearningLanguageDto);
  }

  @Get()
  findAll() {
    return this.learningLenguagesService.findAll();
  }

  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOne(@Param('id') id: string) {
    return await lastValueFrom(
      this.client.send(
        EventConstants.messagePatterns.language.findByCode,
        'es',
      ),
    );
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
