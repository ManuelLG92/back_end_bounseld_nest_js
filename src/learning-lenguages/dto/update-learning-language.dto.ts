import { PartialType } from '@nestjs/mapped-types';
import { CreateLearningLanguageDto } from './create-learning-language.dto';

export class UpdateLearningLanguageDto extends PartialType(
  CreateLearningLanguageDto,
) {}
