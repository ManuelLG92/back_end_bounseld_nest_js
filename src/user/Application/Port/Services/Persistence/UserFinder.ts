import { Inject, Injectable } from '@nestjs/common';
import { RepositoryProviders } from 'src/shared/Infrastructure';
import { IUser } from 'src/user/Domain/Interfaces';
import { UserRepositoryPort } from '../../UserRepositoryPort';

@Injectable()
export class UserFinder {
  constructor(
    @Inject(RepositoryProviders.USER_REPOSITORY)
    private readonly repository: UserRepositoryPort,
  ) {}

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string): Promise<IUser> {
    return await this.repository.findOne(id);
  }

  async findOneByEmail(email: string): Promise<IUser | null> {
    return await this.repository.findOneByEmail(email);
  }
}
