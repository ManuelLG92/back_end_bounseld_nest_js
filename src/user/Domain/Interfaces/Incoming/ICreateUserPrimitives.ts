import { Languages, LearningLanguages } from 'src/user/dto/create-user.dto';
import { IRequestDetail } from 'src/shared/Util';

export interface ICreateUserPrimitives {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  avatar: string;
  age?: number;
  isGoogleUser?: boolean;
  description?: string;
  roles?: [];
  isActive?: boolean;
  isBanish?: boolean;
  country?: string;
  blackList?: [];
  gender?: string;
  languages: Languages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}
