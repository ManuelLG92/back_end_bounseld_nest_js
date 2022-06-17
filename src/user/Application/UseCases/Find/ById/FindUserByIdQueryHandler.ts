import { AppQueryHandler } from '../../../../../shared/Application';
import { UserFinder } from '../../../Port/Services';
import { FindUserByIdQuery } from './FindUserByIdQuery';
import { IUser } from '../../../../Domain/Interfaces';
import { User } from '../../../../Domain/User';

export class FindUserByIdQueryHandler extends AppQueryHandler {
  constructor(private readonly finder: UserFinder) {
    super();
  }
  async execute(command: FindUserByIdQuery): Promise<IUser | null> {
    const { id } = command;

    const user = await this.finder.findOne(id);

    return User.fromObject(user);
  }
}
