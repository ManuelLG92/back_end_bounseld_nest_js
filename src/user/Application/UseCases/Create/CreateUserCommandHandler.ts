import { CreateUserCommand } from './CreateUserCommand';
import { UserSaver } from '../../Port/Services';
import { User } from 'src/user/Domain/User';
import {
  AppCommandHandler,
  AppCommandHandlerDecorator,
} from '../../../../shared/Application';

@AppCommandHandlerDecorator(CreateUserCommand)
export class CreateUserCommandHandler extends AppCommandHandler {
  constructor(private readonly saver: UserSaver) {
    super();
  }

  async execute(command: CreateUserCommand): Promise<void> {
    const { data } = command;
    const user = await User.create(data);
    await this.saver.save(user.toPersistence());
  }
}
