import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../UserRepositoryPort';
import { IUser } from '../../../../Domain/User';
import { RepositoryProviders } from '../../../../../shared/Infrastructure';

@Injectable()
export class UserSaver {
  constructor(
    @Inject(RepositoryProviders.USER_REPOSITORY)
    private userRepositoryPort: UserRepositoryPort,
  ) {}

  async save(user: IUser): Promise<string> {
    return await this.userRepositoryPort.save({ ...user });
  }
}
