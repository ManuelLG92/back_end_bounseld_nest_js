import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  gender: string;

  @IsString()
  country: string;

  @IsArray()
  nativeLanguages: string[];

  @IsArray()
  learningLanguages: string[];

  lastConnection: string;
}
