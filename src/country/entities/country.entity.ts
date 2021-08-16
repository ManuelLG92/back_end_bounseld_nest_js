import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field(() => Int, { description: 'Language Id' })
  id?: number;

  @Field({ description: 'language name', nullable: true })
  name?: string;
}
