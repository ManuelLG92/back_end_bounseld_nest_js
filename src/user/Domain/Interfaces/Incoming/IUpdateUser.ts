import { Languages, LearningLanguages } from '../../../dto/create-user.dto';
import { IRequestDetail } from '../../../../shared/Util';

export interface IUpdateUser {
  id: string;
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
