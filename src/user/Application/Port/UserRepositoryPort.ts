import { Injectable } from '@nestjs/common';
import { ICreateUserPrimitives } from 'src/user/Domain/Interfaces';
import { IUser } from '../../Domain/Interfaces';

@Injectable()
export abstract class UserRepositoryPort {
  abstract save(user: ICreateUserPrimitives): Promise<string | null>;
  abstract findAll(): Promise<IUser[]>;
  abstract findOne(id: string): Promise<IUser>;
  abstract findOneByEmail(email: string): Promise<IUser | null>;
  abstract remove(id: string): Promise<void>;
}
