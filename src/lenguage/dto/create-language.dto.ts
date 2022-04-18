import { IsString, Length } from 'class-validator';

export class CreateLanguageDto {
  @IsString()
  @Length(2, 3)
  code: string;

  @IsString()
  @Length(2, 100)
  name: string;
}
