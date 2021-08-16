import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LearningLanguage {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
