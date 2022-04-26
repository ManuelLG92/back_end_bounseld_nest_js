import { AppCommand } from '../../../../shared/Application/Adapters/AppCqrsBus';
import { IUser } from '../../../Domain/User';

export class CreateUserCommand implements AppCommand {
  constructor(public readonly data: IUser) {}
}
