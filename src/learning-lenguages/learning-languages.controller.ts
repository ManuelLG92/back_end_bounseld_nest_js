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

@Controller('learning-languages')
export class LearningLanguagesController implements OnModuleInit {
  constructor(
    private readonly learningLanguagesService: LearningLanguagesService,
    @Inject(QueueConstants.LEARNING_LANGUAGE_CLIENT)
    private client: ClientProxy,
  ) {}

  async onModuleInit() {
    await this.client.connect();
  }
  @Post()
  create(@Body() createLearningLanguageDto: CreateLearningLanguageDto) {
    return this.learningLanguagesService.create(createLearningLanguageDto);
  }

  @Get(':code')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOne(@Param('code') code: string) {
    console.log('code', code);
    return await lastValueFrom(
      this.client.send(
        EventConstants.messagePatterns.language.findByCode,
        code,
      ),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLearningLanguageDto: UpdateLearningLanguageDto,
  ) {
    return this.learningLanguagesService.update(+id, updateLearningLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learningLanguagesService.remove(+id);
  }
}
