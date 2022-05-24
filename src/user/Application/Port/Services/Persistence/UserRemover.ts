import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from 'src/user/Application';
import { RepositoryProviders } from 'src/shared/Infrastructure';

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
