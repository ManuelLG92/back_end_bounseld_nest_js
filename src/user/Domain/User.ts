import { LearningLanguages, NativeLanguages } from '../dto/create-user.dto';
import { IRequestDetail } from '../../shared/Util';
import { ID } from 'src/shared/ValueObjects/idVO';
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
} from './ValueObjects';
import { BooleanVO } from 'src/shared/ValueObjects/booleanVO';
import { StringNullableVO } from 'src/shared/ValueObjects/stringNullableVO';
import { CollectionVO } from 'src/shared/ValueObjects/collectionVO';
import { GlobalsService } from 'src/globals/globals.service';

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
  gender?: string;
  nativeLanguages: NativeLanguages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}

export class User {
  public readonly id: ID;
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
  country?: StringNullableVO;
  blackList?: BlackListVO;
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
    role?: RolesVO,
    blackList?: BlackListVO,
    isActive?: BooleanVO,
    country?: StringNullableVO,
    gender?: GenderVO,
    nativeLanguages?: NativeLanguages[],
    learningLanguages?: LearningLanguages[],
    ctx?: IRequestDetail,
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.age = age;
    this.isGoogleUser = isGoogleUser;
    this.description = description;
    this.role = role;
    this.isActive = isActive;
    this.gender = gender;
    this.country = country;
    this.nativeLanguages = nativeLanguages;
    this.learningLanguages = learningLanguages;
    this.ctx = ctx;
    this.isBanish = BooleanVO.create(false);
    this.blackList = BlackListVO.create();
  }

  static async create(props: IUser) {
    return new this(
      ID.generate(),
      new NameVO(props.name),
      new SurnameVO(props.surname),
      EmailVo.create(props.email),
      new PasswordVO(await GlobalsService.encryptData(props.password)),
      new AvatarVO(props.avatar ?? null),
      new AgeVO(props.age ?? null),
      BooleanVO.create(props.isGoogleUser ?? false),
      StringNullableVO.create(props.description ?? null),
      RolesVO.create(props.roles ?? ['user']),
      BlackListVO.create(props.blackList ?? []),
      BooleanVO.create(false),
      StringNullableVO.create(props.country ?? null),
      new GenderVO(props.gender ?? null),
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

  toPersistence(): IUser {
    return {
      id: this.id.value(),
      name: this.name.value(),
      surname: this.surname.value(),
      email: this.email.value(),
      roles: this.role.items(),
      password: this.password.value(),
      age: this.age.value(),
      avatar: this.avatar.value(),
      description: this.description.value(),
      gender: this.gender.value(),
      country: this.country.value(),
      nativeLanguages: this.nativeLanguages,
      learningLanguages: this.learningLanguages,
      ctx: this.ctx,
    } as IUser;
  }
}
