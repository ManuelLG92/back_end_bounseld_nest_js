import { AppCommand } from '../../../../shared/Application';
import { IUpdateUser } from '../../../Domain/Interfaces/Incoming';

export class UpdateUserCommand implements AppCommand {
  constructor(public readonly id: string, public readonly data: IUpdateUser) {}
}
