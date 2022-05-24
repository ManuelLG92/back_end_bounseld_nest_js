import { Languages, LearningLanguages } from '../dto/create-user.dto';
import { IRequestDetail } from 'src/shared/Util';
import {
  BooleanVO,
  CollectionVO,
  ID,
  StringNullableVO,
} from 'src/shared/Domain/ValueObjects';
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
import { GlobalsService } from 'src/globals/globals.service';
import { AggregateRoot } from 'src/shared/Domain/Entity/AggregateRoot';
import { ICreateUserPrimitives, IUpdateUser, IUser } from './Interfaces';

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

  static fromObject(props: any | null, createId = false): IUser | null {
    if (!props) {
      return null;
    }
    return {
      id: createId ? ID.generate() : new ID(props.id),
      name: new NameVO(props.name ?? ''),
      surname: new SurnameVO(props.surname ?? ''),
      email: EmailVo.create(props.email ?? ''),
      password: props.password ? new PasswordVO(props.password) : null,
      avatar: new AvatarVO(props.avatar ?? null),
      age: new AgeVO(props.age ?? null),
      isGoogleUser: BooleanVO.create(props.isGoogleUser ?? false),
      description: StringNullableVO.create(props.description ?? null),
      roles: new RolesVO(props.roles ?? ['user']),
      isActive: BooleanVO.create(props.isActive ?? false),
      isBanish: BooleanVO.create(props.isBanish ?? false),
      country: StringNullableVO.create(props.country ?? null),
      blackList: BlackListVO.create(props.blackList ?? []),
      gender: new GenderVO(props.gender ?? null),
      languages: props.languages,
      learningLanguages: props.learningLanguages,
      ctx: props.ctx,
    } as unknown as IUser;
  }

  toPersistence(): ICreateUserPrimitives {
    return {
      id: this.id.value(),
      name: this.name.value(),
      surname: this.surname.value(),
      email: this.email.value(),
      password: this.password.value(),
      avatar: this.avatar.value(),
      age: this.age.value(),
      isGoogleUser: this.isGoogleUser.value(),
      description: this.description.value(),
      roles: this.role.items(),
      isActive: this.isActive.value(),
      isBanish: this.isBanish.value(),
      country: this.country.value(),
      blackList: this.blackList.items(),
      gender: this.gender.value(),
      languages: this.languages,
      learningLanguages: this.learningLanguages,
      ctx: this.ctx,
    } as unknown as ICreateUserPrimitives;
  }
}
