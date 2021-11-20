import {
  //IsArray,
  IsEmail,
  //IsNumber,
  //IsOptional,
  IsString,
  Length,
  //MaxLength,
  //MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsString()
  @Length(2, 100)
  surname: string;

  /*  @IsNumber()
  @Length(2, 3)
  age: number; */

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 32)
  password: string;

  /*@IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsString()
  gender: string;

  @IsString()
  @MinLength(2)
  country: string;

  @IsArray()
  nativeLanguages: string[];

  @IsArray()
  learningLanguages: string[];*/
}
