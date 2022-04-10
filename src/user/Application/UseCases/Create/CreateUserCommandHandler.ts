import { AppCommandHandler } from '../../../Infrastructure/AppCqrsBus/AppCommandHandler';
import { CreateUserCommand } from './CreateUserCommand';
import { UserSaver } from '../../Port/Services';

export class CreateUserCommandHandler extends AppCommandHandler {
  constructor(private readonly saver: UserSaver) {
    super();
  }
  async execute(command: CreateUserCommand): Promise<void> {
    const { data } = command;
    await this.saver.save(data);
  }
}
