import { IUpdateUserPrimitives as IUpdateUserPrimitives } from '../../../Domain/Interfaces/Incoming';
import {
  AgeVO,
  AvatarVO,
  GenderVO,
  NameVO,
  SurnameVO,
} from 'src/user/Domain/ValueObjects';
import { StringNullableVO } from 'src/shared/Domain/ValueObjects';
import { IUpdateUser } from 'src/user/Domain/Interfaces';

export const UpdateUserFactoryVO = async (data: IUpdateUserPrimitives) => {
  return {
    name: new NameVO(data.name),
    surname: new SurnameVO(data.surname),
    avatar: new AvatarVO(data.avatar),
    age: new AgeVO(data.age),
    description: StringNullableVO.create(data.description),
    country: StringNullableVO.create(data.country),
    gender: GenderVO.create(data.gender),
    languages: data.languages,
    learningLanguages: data.learningLanguages,
    ctx: data.ctx,
  } as IUpdateUser;
};
