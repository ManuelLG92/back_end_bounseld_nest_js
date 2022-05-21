import { Languages, LearningLanguages } from '../../../dto/create-user.dto';
import { IRequestDetail } from '../../../../shared/Util';

export interface ICreateUser {
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
