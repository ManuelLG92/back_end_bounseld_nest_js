import { CreateLearningLanguageInput } from './create-learning-language.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLearningLanguageInput extends PartialType(CreateLearningLanguageInput) {
  @Field(() => Int)
  id: number;
}
