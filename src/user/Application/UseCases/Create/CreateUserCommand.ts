import { AppCommand } from '../../../../shared/Application';
import { ICreateUser } from '../../Interfaces';

export class CreateUserCommand implements AppCommand {
  constructor(public readonly data: ICreateUser) {}
}
