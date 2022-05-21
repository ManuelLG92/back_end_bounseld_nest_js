import { LearningLanguages, Languages } from '../dto/create-user.dto';
import { IRequestDetail } from '../../shared/Util';
import { ID } from 'src/shared/Domain/ValueObjects/idVO';
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
import { BooleanVO } from 'src/shared/Domain/ValueObjects/booleanVO';
import { StringNullableVO } from 'src/shared/Domain/ValueObjects/stringNullableVO';
import { CollectionVO } from 'src/shared/Domain/ValueObjects/collectionVO';
import { GlobalsService } from 'src/globals/globals.service';
import { AggregateRoot } from '../../shared/Domain/Entity/AggregateRoot';
import { ICreateUser } from './Interfaces/Incoming';

export interface IUser {
  id: ID;
  name: NameVO;
  surname: SurnameVO;
  email: EmailVo;
  password: PasswordVO;
  avatar: AvatarVO;
  age?: AgeVO;
  isGoogleUser?: BooleanVO;
  description?: StringNullableVO;
  roles?: RolesVO;
  isActive?: BooleanVO;
  isBanish?: BooleanVO;
  country?: StringNullableVO;
  blackList?: BlackListVO;
  gender?: GenderVO;
  languages: Languages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}

export interface IUpdateUser {
  name: NameVO;
  surname: SurnameVO;
  avatar: AvatarVO;
  age?: AgeVO;
  description?: StringNullableVO;
  country?: StringNullableVO;
  gender?: GenderVO;
  languages: Languages[];
  learningLanguages: LearningLanguages[];
  ctx: IRequestDetail;
}

export class User extends AggregateRoot {
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
  languages: Languages[];
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
    this.isBanish = BooleanVO.create(false);
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

  static fromObject(props: any | null): IUser | null {
    if (!props) {
      return null;
    }
    return {
      id: new ID(props.id ?? ''),
      name: new NameVO(props.name ?? ''),
      surname: new SurnameVO(props.surname ?? ''),
      email: EmailVo.create(props.email ?? ''),
      roles: new RolesVO(props.roles ?? ['user']),
      password: props.password ? new PasswordVO(props.password) : null,
      age: props.age ? new AgeVO(props.age) : null,
      avatar: props.avatar ? new AvatarVO(props.avatar) : null,
      description: props.description
        ? StringNullableVO.create(props.description)
        : null,
      gender: props.gender ? new GenderVO(props.gender) : null,
      country: props.country ? StringNullableVO.create(props.country) : null,
      languages: props.languages,
      learningLanguages: props.learningLanguages,
      ctx: props.ctx,
    } as unknown as IUser;
  }

  toPersistence(): ICreateUser {
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
      languages: this.languages,
      learningLanguages: this.learningLanguages,
      ctx: this.ctx,
    } as unknown as ICreateUser;
  }
}
