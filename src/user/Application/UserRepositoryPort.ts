import { CreateUserDto } from '../dto/create-user.dto';
import { IRequestDetail } from '../../util';
import { Injectable } from '@nestjs/common';
import { IUser } from '../Domain/User';

@Injectable()
export abstract class UserRepositoryPort {
  abstract save(
    createUserRestDto: CreateUserDto,
    reqDetails: IRequestDetail,
  ): Promise<void>;
  abstract findAll(): Promise<IUser[]>;
  abstract findOne(id: string): Promise<IUser>;
  abstract findOneByEmail(email: string): Promise<IUser>;
  abstract remove(id: string): Promise<void>;
}
