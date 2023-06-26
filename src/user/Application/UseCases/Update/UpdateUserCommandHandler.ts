import { User } from 'src/user/Domain/User';
import { AppCommandHandler } from '../../../../shared/Application';
import { BadRequestException, Injectable } from '@nestjs/common';
import { IUserToObject, UpdateUserFactoryVO } from '../Services';
import { IUser, IUserLanguage } from '../../../Domain/Interfaces';
import { UserFinder, UserSaver } from '../../Port/Services';
import { GetLanguages } from '../Services';

@Injectable()
export class UpdateUserCommandHandler extends AppCommandHandler {
  constructor(
    private readonly saver: UserSaver,
    private readonly finder: UserFinder,
    private readonly getLanguages: GetLanguages,
  ) {
    super();
  }

  async execute(command: any): Promise<void> {
    const { id, data } = command;

    const user = await this.getUserOrThrowException(id);

    const factoryVO = await UpdateUserFactoryVO(user, data);

    const languages = await this.getLanguages.send(factoryVO.languages);

    const userEntity = await this.userTransformer(user, languages);

    userEntity.update(factoryVO);

    await this.saver.save(userEntity.toPersistence());
  }

  private async getUserOrThrowException(id: string) {
    const user = await this.finder.findOne(id);
    if (!user) {
      throw new BadRequestException('User not found.');
    }

    return user;
  }

  async userTransformer(
    user: IUser,
    languages: IUserLanguage[],
  ): Promise<User> {
    return await User.create(
      User.fromObject({ ...(await IUserToObject(user)), languages }, false),
      user.id,
    );
  }
}
