import { Injectable } from '@nestjs/common';
import { IUser } from '../../Domain/User';
import { ICreateUser } from '../../Domain/Interfaces/Incoming';

@Injectable()
export abstract class UserRepositoryPort {
  abstract save(user: ICreateUser): Promise<string | null>;
  abstract findAll(): Promise<IUser[]>;
  abstract findOne(id: string): Promise<IUser>;
  abstract findOneByEmail(email: string): Promise<IUser | null>;
  abstract remove(id: string): Promise<void>;
}
