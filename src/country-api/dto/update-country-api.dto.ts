import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryApiDto } from './create-country-api.dto';

export class UpdateCountryApiDto extends PartialType(CreateCountryApiDto) {}
