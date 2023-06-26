import { Inject, Injectable } from '@nestjs/common';
import { RepositoryProviders } from 'src/shared/Infrastructure';
import { UserRepositoryPort } from '../../UserRepositoryPort';

@Injectable()
export class UserRemover {
  constructor(
    @Inject(RepositoryProviders.USER_REPOSITORY)
    private userRepositoryPort: UserRepositoryPort,
  ) {}

  async remove(id: string) {
    return await this.userRepositoryPort.remove(id);
  }
}
