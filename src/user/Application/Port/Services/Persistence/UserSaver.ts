import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from 'src/user/Application';
import { RepositoryProviders } from 'src/shared/Infrastructure';
import { ICreateUserPrimitives } from 'src/user/Domain/Interfaces';

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
