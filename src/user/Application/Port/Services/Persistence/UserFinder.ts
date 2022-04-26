import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../UserRepositoryPort';
import { RepositoryProviders } from '../../../../../shared/Infrastructure';

@Injectable()
export class UserFinder {
  constructor(
    @Inject(RepositoryProviders.USER_REPOSITORY)
    private readonly repository: UserRepositoryPort,
  ) {}

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async findOneByEmail(email: string) {
    return await this.repository.findOneByEmail(email);
  }
}
