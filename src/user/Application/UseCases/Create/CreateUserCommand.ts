import { AppCommand } from '../../../../shared/Application';
import { ICreateUser } from '../../../Domain/Interfaces/Incoming';

export class CreateUserCommand implements AppCommand {
  constructor(public readonly data: ICreateUser) {}
}
