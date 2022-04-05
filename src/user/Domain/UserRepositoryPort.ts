import { Injectable } from '@nestjs/common';
import { IUser } from './User';

@Injectable()
export abstract class UserRepositoryPort {
  abstract save(user: IUser): Promise<string>;
  abstract findAll(): Promise<IUser[]>;
  abstract findOne(id: string): Promise<IUser>;
  abstract findOneByEmail(email: string): Promise<IUser>;
  abstract remove(id: string): Promise<void>;
}
