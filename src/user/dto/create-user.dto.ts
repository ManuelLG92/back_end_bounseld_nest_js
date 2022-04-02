import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export interface NativeLanguages {
  code: string;
  name: string;
}

export interface LearningLanguages {
  code: string;
  name: string;
  level: string;
}
export class CreateUserDto {
  @IsOptional()
  @IsString()
  @Length(2, 40)
  id: string;

  @IsString()
  @Length(2, 100)
  name: string;

  @IsString()
  @Length(2, 100)
  surname: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 32)
  password: string;

  @IsOptional()
  @IsNumber()
  @Min(18)
  @Max(100)
  age?: number;

  @IsOptional()
  @IsString()
  @Length(2, 255)
  avatar: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  country?: string;

  @IsOptional()
  @IsArray()
  nativeLanguages: NativeLanguages[];

  @IsOptional()
  @IsArray()
  learningLanguages: LearningLanguages[];
}
