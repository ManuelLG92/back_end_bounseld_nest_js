import { AppCommand } from '../../../../shared/Application';
import { IUpdateUserPrimitives } from '../../../Domain/Interfaces/Incoming';

export class UpdateUserCommand implements AppCommand {
  constructor(
    public readonly id: string,
    public readonly data: IUpdateUserPrimitives,
  ) {}
}
