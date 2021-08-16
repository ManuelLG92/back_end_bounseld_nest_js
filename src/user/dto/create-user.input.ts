import { Gender } from '.prisma/client';
import { InputType, Field } from '@nestjs/graphql';
import {IsEmail, IsNotEmpty, IsOptional, Length, MaxLength, Min, MinLength } from "class-validator";

@InputType()
export class CreateUserInput {

  @Field({ description: 'Name between 2 and 100 characters' })
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @Field({ description: 'Surname between 2 and 100 characters' })
  @IsNotEmpty()
  @Length(2, 100)
  surname: string;

  @Field({ description: 'This website is just for people over 18 years old.' })
  @IsNotEmpty()
  @Min(18)
  age: number;

  @Field({ description: 'Choose gender "MALE | FEMALE | PREFER_NOT:SAY' })
  @IsNotEmpty()
  @MinLength(4)
  gender: Gender;

  @Field({ description: 'Provide valid country ID.' })
  @IsNotEmpty()
  @Min(1)
  countryId: number;

  @Field({ description: 'Provide valid Email.' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field({ description: 'Password between 8 and 32 characters' })
  @IsNotEmpty()
  @Length(8, 32)
  password: string;

  @Field({ nullable: true,description: 'Optional description max 255 characters.' })
  @IsOptional()
  @MaxLength(255)
  description?: string;
  // { description: 'Surname between 2 and 100 characters' }
}


