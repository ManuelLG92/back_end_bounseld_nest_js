import { Inject, Injectable } from '@nestjs/common';
import { RepositoryProviders } from 'src/shared/Infrastructure';
import { ICreateUserPrimitives } from 'src/user/Domain/Interfaces';
import { UserRepositoryPort } from '../../UserRepositoryPort';

@Injectable()
export class UserSaver {
  constructor(
    @Inject(RepositoryProviders.USER_REPOSITORY)
    private userRepositoryPort: UserRepositoryPort,
  ) {}

  async save(user: ICreateUserPrimitives): Promise<string> {
    return await this.userRepositoryPort.save({ ...user });
  }
}
