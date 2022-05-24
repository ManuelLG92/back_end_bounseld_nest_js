import {
  AgeVO,
  AvatarVO,
  BlackListVO,
  EmailVo,
  GenderVO,
  NameVO,
  PasswordVO,
  RolesVO,
  SurnameVO,
} from '../ValueObjects';
import { StringNullableVO } from 'src/shared/Domain/ValueObjects';
import { Languages, LearningLanguages } from '../../dto/create-user.dto';
import { IRequestDetail } from 'src/shared/Util';
import { ID } from 'src/shared/Domain/ValueObjects';
import { BooleanVO } from 'src/shared/Domain/ValueObjects/BooleanVO';

export interface IUser {
  id: ID;
  name: NameVO;
  surname: SurnameVO;
  email: EmailVo;
  password: PasswordVO;
  avatar: AvatarVO;
  age: AgeVO;
  isGoogleUser: BooleanVO;
  description: StringNullableVO;
  roles: RolesVO;
  isActive: BooleanVO;
  isBanish: BooleanVO;
  country: StringNullableVO;
  blackList: BlackListVO;
  gender: GenderVO;
  languages: Languages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}

export interface IUpdateUser {
  name: NameVO;
  surname: SurnameVO;
  avatar: AvatarVO;
  age: AgeVO;
  description: StringNullableVO;
  country: StringNullableVO;
  gender: GenderVO;
  languages: Languages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}

export * from './Incoming';
