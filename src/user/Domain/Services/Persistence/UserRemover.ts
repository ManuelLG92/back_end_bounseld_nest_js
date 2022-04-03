import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../UserRepositoryPort';
import { UserProviders } from '../../../constants/repository';

@Injectable()
export class UserRemover {
  constructor(
    @Inject(UserProviders.USER_REPOSITORY)
    private userRepositoryPort: UserRepositoryPort,
  ) {}

  async remove(id: string) {
    return await this.userRepositoryPort.remove(id);
  }
}
