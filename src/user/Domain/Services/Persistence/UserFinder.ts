import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../UserRepositoryPort';
import { UserProviders } from '../../../constants/repository';

@Injectable()
export class UserFinder {
  constructor(
    @Inject(UserProviders.USER_REPOSITORY)
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
