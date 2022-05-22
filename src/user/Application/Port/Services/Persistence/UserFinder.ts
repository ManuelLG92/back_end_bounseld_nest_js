import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../UserRepositoryPort';
import { RepositoryProviders } from '../../../../../shared/Infrastructure';
import { IUser } from '../../../../Domain/User';

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
