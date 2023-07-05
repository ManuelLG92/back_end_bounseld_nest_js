import { IUpdateUserPrimitives as IUpdateUserPrimitives } from '../../../Domain/Interfaces/Incoming';
import { AgeVO } from 'src/user/Domain/ValueObjects';
import { IUpdateUser, IUser } from 'src/user/Domain/Interfaces';

export const UpdateUserFactoryVO = async (
  userData: IUser,
  data: IUpdateUserPrimitives,
) => {
  return {
    name: data.name ?? userData.name,
    surname: data.surname ?? userData.surname,
    avatar: data.avatar ?? userData.avatar,
    age: data.age ? new AgeVO(data.age) : userData.age,
    description: data.description ?? userData.description,
    country: data.country ?? userData.country,
    gender: data.gender ?? userData.gender,
    languages: data.languages ?? userData.languages,
    learningLanguages: data.learningLanguages ?? userData.languages,
    ctx: data.ctx,
  } as IUpdateUser;
};

export const IUserToObject = async (props: IUser): Promise<object> => {
  return {
    id: props.id.value(),
    name: props.name,
    surname: props.surname,
    email: props.email.value(),
    password: props.password.value(),
    avatar: props.avatar,
    age: props.age.value(),
    isGoogleUser: props.isGoogleUser,
    description: props.description,
    roles: props.roles.items(),
    isActive: props.isActive,
    isBanish: props.isBanish,
    country: props.country,
    blackList: props.blackList.items(),
    gender: props.gender,
    languages: props.languages,
    learningLanguages: props.learningLanguages,
    ctx: props.ctx,
  };
};
