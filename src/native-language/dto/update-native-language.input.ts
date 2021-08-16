import { CreateNativeLanguageInput } from './create-native-language.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNativeLanguageInput extends PartialType(CreateNativeLanguageInput) {
  @Field(() => Int)
  id: number;
}
