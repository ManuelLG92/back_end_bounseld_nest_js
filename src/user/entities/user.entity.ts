import { LearningLanguage } from '.prisma/client';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Country } from 'src/country/entities/country.entity';
import { NativeLanguage } from 'src/native-language/entities/native-language.entity';


@ObjectType()
export class User {
  @Field(() => Int, { description: 'User Id' })
  id: number;

  @Field({ description: 'User name', nullable: true })
  name?: string;

  @Field({ description: 'User surname', nullable: true })
  surname?: string;

  @Field(() => Int, { description: 'User age',  nullable: true })
  age?: number;

  @Field(() => Country , { description: 'User country', nullable: true })
  country?: string;

  @Field(() => [NativeLanguage] , { description: 'User Native languages', nullable: true })
  nativeLanguages?: NativeLanguage[];

}
