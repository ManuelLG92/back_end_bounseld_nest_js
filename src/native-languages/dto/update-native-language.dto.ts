import { PartialType } from '@nestjs/mapped-types';
import { CreateNativeLanguageDto } from './create-native-language.dto';

export class UpdateNativeLanguageDto extends PartialType(
  CreateNativeLanguageDto,
) {}
