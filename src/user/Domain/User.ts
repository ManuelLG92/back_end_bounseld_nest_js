import { LearningLanguages, NativeLanguages } from '../dto/create-user.dto';
import { IRequestDetail } from '../../util';

export interface IUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  age?: number;
  avatar: string;
  description?: string;
  gender?: string;
  country?: string;
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
  age?: number;
  avatar: string;
  description?: string;
  gender?: string;
  country?: string;
  nativeLanguages: NativeLanguages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;

  constructor(
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    age: number,
    avatar: string,
    description: string,
    gender: string,
    country: string,
    nativeLanguages: NativeLanguages[],
    learningLanguages: LearningLanguages[],
    ctx: IRequestDetail,
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.age = age;
    this.avatar = avatar;
    this.description = description;
    this.gender = gender;
    this.country = country;
    this.nativeLanguages = nativeLanguages;
    this.learningLanguages = learningLanguages;
    this.ctx = ctx;
  }

  static async create(props: IUser) {
    return new this(
      props.id,
      props.name,
      props.surname,
      props.email,
      props.password,
      props.age,
      props.avatar,
      props.description,
      props.gender,
      props.country,
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
