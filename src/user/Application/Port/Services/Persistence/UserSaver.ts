import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../UserRepositoryPort';
import { RepositoryProviders } from '../../../../../shared/Infrastructure';
import { ICreateUser } from '../../../../Domain/Interfaces/Incoming';

@Injectable()
export class UserSaver {
  constructor(
    @Inject(RepositoryProviders.USER_REPOSITORY)
    private userRepositoryPort: UserRepositoryPort,
  ) {}

  async save(user: ICreateUser): Promise<string> {
    return await this.userRepositoryPort.save({ ...user });
  }
}
