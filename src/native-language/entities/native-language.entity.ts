import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Language } from 'src/language/entities/language.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class NativeLanguage {
  @Field(() => Int, { description: 'Native language ID by User' })
  id: number;

  @Field(() => User , { description: 'User', nullable: true })
  user?: User;

  @Field(() => Language , { description: 'Language', nullable: true })
  language?: Language;
}
