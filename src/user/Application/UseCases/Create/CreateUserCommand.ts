import { IUser } from '../../../Domain/User';
import { AppCommand } from '../../../../shared/Application';

export class CreateUserCommand implements AppCommand {
  constructor(public readonly data: IUser) {}
}
