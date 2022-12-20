import {
  AgeVO,
  BlackListVO,
  EmailVo,
  gender,
  PasswordVO,
  RolesVO,
} from '../ValueObjects';
import { LearningLanguages } from '../../dto/create-user.dto';
import { IRequestDetail } from 'src/shared/Util';
import { ID } from 'src/shared/Domain/ValueObjects';

export interface IUser {
  id: ID;
  name: string;
  surname: string;
  email: EmailVo;
  password: PasswordVO;
  avatar: string;
  age: AgeVO;
  isGoogleUser: boolean;
  description?: string;
  roles: RolesVO;
  isActive: boolean;
  isBanish: boolean;
  country: string;
  blackList: BlackListVO;
  gender: gender;
  languages: string[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}

export interface IUserPrimitives {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  avatar: string;
  age: number;
  isGoogleUser: boolean;
  description?: string;
  roles: string[];
  isActive: boolean;
  isBanish: boolean;
  country: string;
  blackList: string[];
  gender: string;
  languages: string[];
  learningLanguages: [];
  ctx: IRequestDetail;
}

export interface IUpdateUser {
  name: string;
  surname: string;
  avatar: string;
  age: AgeVO;
  description: string;
  country: string;
  gender: gender;
  languages: string[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}

export * from './Incoming';
