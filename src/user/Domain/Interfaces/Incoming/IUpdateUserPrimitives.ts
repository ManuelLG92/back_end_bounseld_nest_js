import { Languages, LearningLanguages } from 'src/user/dto/create-user.dto';
import { IRequestDetail } from 'src/shared/Util';

export interface IUpdateUserPrimitives {
  name: string;
  surname: string;
  avatar: string;
  age?: number;
  description?: string;
  country?: string;
  gender?: string;
  languages: Languages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}
