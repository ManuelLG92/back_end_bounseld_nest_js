import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../UserRepositoryPort';
import { UserProviders } from '../../../constants/repository';
import { IUser } from '../../User';

@Injectable()
export class UserSaver {
  constructor(
    @Inject(UserProviders.USER_REPOSITORY)
    private userRepositoryPort: UserRepositoryPort,
  ) {}

  async save(user: IUser): Promise<string> {
    return await this.userRepositoryPort.save({ ...user });
  }
}
