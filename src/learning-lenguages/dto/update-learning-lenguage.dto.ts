import { PartialType } from '@nestjs/mapped-types';
import { CreateLearningLenguageDto } from './create-learning-lenguage.dto';

export class UpdateLearningLenguageDto extends PartialType(
  CreateLearningLenguageDto,
) {}
