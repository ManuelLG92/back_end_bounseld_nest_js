import { AppCommandHandler } from '../../../Infrastructure/AppCqrsBus/AppCommandHandler';
import { CreateUserCommand } from './CreateUserCommand';
import { UserSaver } from '../../Port/Services';
import { Inject } from '@nestjs/common';

export class CreateUserCommandHandler extends AppCommandHandler {
  constructor(@Inject() private readonly saver: UserSaver) {
    super();
  }
  async execute(command: CreateUserCommand): Promise<void> {
    const { data } = command;
    await this.saver.save(data);
  }
}
