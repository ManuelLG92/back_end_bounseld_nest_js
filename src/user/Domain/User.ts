import { LearningLanguages, NativeLanguages } from '../dto/create-user.dto';
import { IRequestDetail } from '../../util';

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
  isAdmin?: boolean;
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
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  avatar: string;
  age?: number;
  isGoogleUser?: boolean;
  description?: string;
  isAdmin?: boolean;
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

  constructor(
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    avatar: string,
    age?: number,
    isGoogleUser?: boolean,
    description?: string,
    isAdmin?: boolean,
    isActive?: boolean,
    country?: string,
    gender?: string,
    nativeLanguages?: NativeLanguages[],
    learningLanguages?: LearningLanguages[],
    ctx?: IRequestDetail,
  ) {
    this.id = `id-${Math.random().toString()}`;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.age = age;
    this.isGoogleUser = isGoogleUser ?? false;
    this.description = description;
    this.isAdmin = isAdmin ?? false;
    this.isActive = isActive ?? false;
    this.gender = gender;
    this.country = country;
    this.nativeLanguages = nativeLanguages;
    this.learningLanguages = learningLanguages;
    this.ctx = ctx;
    this.isBanish = false;
    this.blackList = [];
    this.friends = [];
    this.reports = [];
  }

  static async create(props: IUser) {
    return new this(
      props.id,
      props.name,
      props.surname,
      props.email,
      props.password,
      props.avatar,
      props.age,
      props.isGoogleUser,
      props.description,
      props.isAdmin,
      props.isActive,
      props.country,
      props.gender,
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
}
