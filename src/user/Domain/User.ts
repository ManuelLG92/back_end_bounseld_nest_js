import { LearningLanguages, NativeLanguages } from '../dto/create-user.dto';
import { IRequestDetail } from '../../util';
import { ID } from 'src/shared/ValueObjects/idVO';
import { NameVO } from '../VO/nameVO';
import { SurnameVO } from '../VO/surnameVO';
import { EmailVo } from '../VO/emailVO';
import { PasswordVO } from '../VO/passwordVO';
import { AvatarVO } from '../VO/avatarVO ';
import { AgeVO } from '../VO/ageVO';
import { BooleanVO } from 'src/shared/ValueObjects/booleanVO';
import { CollectionVO } from 'src/shared/ValueObjects/collectionVO';
import { GenderVO } from '../VO/genderVO';
import { StringNullableVO } from 'src/shared/ValueObjects/stringNullableVO';
import { StringVO } from 'src/shared/ValueObjects/stringVO';

export interface IUser {
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
  friends?: [];
  reports?: [];
  gender?: string;
  nativeLanguages: NativeLanguages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}

export class User {
  id: ID;
  name: NameVO;
  surname: SurnameVO;
  email: EmailVo;
  password: PasswordVO;
  avatar: AvatarVO;
  age?: AgeVO;
  isGoogleUser?: BooleanVO;
  description?: StringNullableVO;
  role?: CollectionVO;
  isActive?: BooleanVO;
  isBanish?: BooleanVO;
  country?: StringVO;
  blackList?: CollectionVO;
  friends?: CollectionVO;
  reports?: CollectionVO;
  gender?: GenderVO;
  nativeLanguages: NativeLanguages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;

  constructor(
    id: ID,
    name: NameVO,
    surname: SurnameVO,
    email: EmailVo,
    password: PasswordVO,
    avatar: AvatarVO,
    age?: AgeVO,
    isGoogleUser?: BooleanVO,
    description?: StringNullableVO,
    role?: CollectionVO,
    blackList?: CollectionVO,
    friends?: CollectionVO,
    reports?: CollectionVO,
    isActive?: BooleanVO,
    country?: StringVO,
    gender?: GenderVO,
    nativeLanguages?: NativeLanguages[],
    learningLanguages?: LearningLanguages[],
    ctx?: IRequestDetail,
  ) {
    this.id = ID.generate();
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.age = age;
    this.isGoogleUser = isGoogleUser;
    this.description = description;
    this.role = CollectionVO.create();
    this.isActive = isActive;
    this.gender = gender;
    this.country = country;
    this.nativeLanguages = nativeLanguages;
    this.learningLanguages = learningLanguages;
    this.ctx = ctx;
    this.isBanish = BooleanVO.create(false);
    this.blackList = CollectionVO.create();
    this.friends = CollectionVO.create();
    this.reports = CollectionVO.create();
  }

  static async create(props: IUser) {
    return new this(
      ID.fromString(props.id),
      NameVO.create(props.name),
      SurnameVO.create(props.surname),
      EmailVo.create(props.email),
      PasswordVO.create(props.password),
      AvatarVO.create(props.avatar),
      AgeVO.create(props.age),
      BooleanVO.create(props.isGoogleUser),
      StringNullableVO.create(props.description),
      CollectionVO.create(),
      CollectionVO.create(),
      CollectionVO.create(),
      CollectionVO.create(),
      BooleanVO.create(false),
      StringVO.create(props.country),
      GenderVO.create(props.gender),
      props.nativeLanguages,
      props.learningLanguages,
      props.ctx,
    );
  }

  static fromObject(props: any): IUser {
    return {
      id: props.id,
      name: props.name,
      surname: props.surname,
      email: props.email,
      roles: props.roles,
      password: props.password,
      age: props.age,
      avatar: props.avatar,
      description: props.description,
      gender: props.gender,
      country: props.country,
      nativeLanguages: props.nativeLanguages,
      learningLanguages: props.learningLanguages,
      ctx: props.ctx,
    } as IUser;
  }

  toPersistence(){
    
  }
}
