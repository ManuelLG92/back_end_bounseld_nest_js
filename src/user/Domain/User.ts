import { LearningLanguages } from '../dto/create-user.dto';
import { IRequestDetail } from 'src/shared/Util';
import { CollectionVO, ID } from 'src/shared/Domain/ValueObjects';
import {
  AgeVO,
  BlackListVO,
  EmailVo,
  gender,
  PasswordVO,
  RolesVO,
} from './ValueObjects';
import { GlobalsService } from 'src/globals/globals.service';
import { AggregateRoot } from 'src/shared/Domain/Entity/AggregateRoot';
import {
  ICreateUserPrimitives,
  IUpdateUser,
  IUser,
  IUserPrimitives,
} from './Interfaces';

export class User extends AggregateRoot {
  public readonly id: ID;
  name: string;
  surname: string;
  email: EmailVo;
  password: PasswordVO;
  avatar?: string;
  age?: AgeVO;
  isGoogleUser?: boolean;
  description?: string;
  role?: CollectionVO;
  isActive?: boolean;
  isBanish?: boolean;
  country?: string;
  blackList?: BlackListVO;
  gender?: gender;
  languages: string[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;

  constructor(properties: IUser) {
    super(properties.id);
    this.id = properties.id;
    this.name = properties.name;
    this.surname = properties.surname;
    this.email = properties.email;
    this.password = properties.password;
    this.avatar = properties.avatar;
    this.age = properties.age;
    this.isGoogleUser = properties.isGoogleUser;
    this.description = properties.description;
    this.role = properties.roles;
    this.isActive = properties.isActive;
    this.gender = properties.gender;
    this.country = properties.country;
    this.languages = properties.languages;
    this.learningLanguages = properties.learningLanguages;
    this.ctx = properties.ctx;
    this.isBanish = false;
    this.blackList = BlackListVO.create();
  }

  static async create(props: IUser, id?: ID): Promise<User> {
    return new User({
      ...props,
      id: id ? id : ID.generate(),
      password: new PasswordVO(
        await GlobalsService.encryptData(props.password.value()),
      ),
    });
  }

  update(props: IUpdateUser) {
    this.name = props.name;
    this.surname = props.surname;
    this.avatar = props.avatar;
    this.age = props.age;
    this.description = props.description;
    this.country = props.country;
    this.gender = props.gender;
    this.languages = props.languages;
    this.learningLanguages = props.learningLanguages;
    this.ctx = props.ctx;
  }

  static fromObject(
    props: any | IUserPrimitives,
    createId = false,
  ): IUser | null {
    if (!props) {
      return null;
    }
    return {
      id: createId ? ID.generate() : new ID(props.id),
      name: props.name,
      surname: props.surname,
      email: EmailVo.create(props.email ?? ''),
      password: props.password ? new PasswordVO(props.password) : null,
      avatar: props.avatar ?? null,
      age: new AgeVO(props.age ?? null),
      isGoogleUser: props.isGoogleUser ?? false,
      description: props.description ?? null,
      roles: RolesVO.byDefault(),
      isActive: props.isActive ?? false,
      isBanish: props.isBanish ?? false,
      country: props.country ?? null,
      blackList: BlackListVO.create(props.blackList ?? []),
      gender: props.gender,
      languages: props.languages,
      learningLanguages: props.learningLanguages,
      ctx: props.ctx,
    } as unknown as IUser;
  }

  toPersistence(): ICreateUserPrimitives {
    return {
      id: this.id.value(),
      name: this.name,
      surname: this.surname,
      email: this.email.value(),
      password: this.password.value(),
      avatar: this.avatar,
      age: this.age.value(),
      isGoogleUser: this.isGoogleUser,
      description: this.description,
      roles: this.role.items(),
      isActive: this.isActive,
      isBanish: this.isBanish,
      country: this.country,
      blackList: this.blackList.items(),
      gender: this.gender,
      languages: this.languages,
      learningLanguages: this.learningLanguages,
      ctx: this.ctx,
    } as unknown as ICreateUserPrimitives;
  }
}
