import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNativeLanguageInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
