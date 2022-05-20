import { IUpdateUser } from '../../../Domain/User';
import { AppCommand } from '../../../../shared/Application';

export class UpdateUserCommand implements AppCommand {
  constructor(public readonly data: IUpdateUser) {}
}
