import { IUpdateUserPrimitives as IUpdateUserPrimitives } from '../../../Domain/Interfaces/Incoming';
import {
  AgeVO,
  AvatarVO,
  GenderVO,
  NameVO,
  SurnameVO,
} from 'src/user/Domain/ValueObjects';
import { StringNullableVO } from 'src/shared/Domain/ValueObjects';
import { IUpdateUser, IUser } from 'src/user/Domain/Interfaces';

export const UpdateUserFactoryVO = async (
  userData: IUser,
  data: IUpdateUserPrimitives,
) => {
  return {
    name: data.name ? new NameVO(data.name) : userData.name,
    surname: data.surname ? new SurnameVO(data.surname) : userData.surname,
    avatar: data.avatar ? new AvatarVO(data.avatar) : userData.avatar,
    age: data.age ? new AgeVO(data.age) : userData.age,
    description: data.description
      ? StringNullableVO.create(data.description)
      : userData.description,
    country: data.country
      ? StringNullableVO.create(data.country)
      : userData.country,
    gender: data.gender ? GenderVO.create(data.gender) : userData.gender,
    languages: data.languages ?? userData.languages,
    learningLanguages: data.learningLanguages ?? userData.languages,
    ctx: data.ctx,
  } as IUpdateUser;
};

export const IUserToObject = async (props: IUser): Promise<object> => {
  return {
    id: props.id.value(),
    name: props.name.value(),
    surname: props.surname.value(),
    email: props.email.value(),
    password: props.password.value(),
    avatar: props.avatar.value(),
    age: props.age.value(),
    isGoogleUser: props.isGoogleUser.value(),
    description: props.description.value(),
    roles: props.roles.items(),
    isActive: props.isActive.value(),
    isBanish: props.isBanish.value(),
    country: props.country.value(),
    blackList: props.blackList.items(),
    gender: props.gender.value(),
    languages: props.languages,
    learningLanguages: props.learningLanguages,
    ctx: props.ctx,
  };
};
