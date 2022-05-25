import { User } from 'src/user/Domain/User';
import {
  AppCommandHandler,
  AppCommandHandlerDecorator,
} from '../../../../shared/Application';
import { BadRequestException, Inject } from '@nestjs/common';
import { QueueConstants, RepositoryProviders } from 'src/shared/Infrastructure';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateUserCommand } from './UpdateUserCommand';
import { lastValueFrom } from 'rxjs';
import EventConstants from '../../../../shared/Domain/Constants/Events/EventConstants';
import { ILanguage } from '../../../../lenguage/Domain/language';
import { IUserToObject, UpdateUserFactoryVO } from '../Services';
import { UserRepositoryPort } from '../../Port';
import { IUpdateUser, IUser } from '../../../Domain/Interfaces';

@AppCommandHandlerDecorator(UpdateUserCommand)
export class UpdateUserCommandHandler extends AppCommandHandler {
  constructor(
    @Inject(RepositoryProviders.USER_REPOSITORY)
    private repo: UserRepositoryPort,
    @Inject(QueueConstants.USER_CLIENT)
    private client: ClientProxy,
  ) {
    super();
  }

  async onModuleInit() {
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  async execute(command: UpdateUserCommand): Promise<void> {
    const { id, data } = command;

    const userExistingData = await this.repo.findOne(id);

    await this.handlerUserNotFoundException(userExistingData);

    const factoryVO = await UpdateUserFactoryVO(userExistingData, data);

    const languages = await this.getLanguages(factoryVO);

    const userEntity = await this.userTransformer(userExistingData, languages);

    userEntity.update(factoryVO);

    await this.repo.save(userEntity.toPersistence());
  }

  async getLanguages(factoryVO: IUpdateUser) {
    return (await lastValueFrom(
      this.client.send(
        EventConstants.messagePatterns.language.findCollectionByCodes,
        factoryVO.languages.map((lang) => lang.code),
      ),
    )) as unknown as ILanguage[];
  }

  async handlerUserNotFoundException(
    user: IUser | null | undefined,
  ): Promise<void> {
    if (!user) {
      throw new BadRequestException('User not found.');
    }
  }

  async userTransformer(user: IUser, languages: ILanguage[]): Promise<User> {
    return await User.create(
      User.fromObject({ ...(await IUserToObject(user)), languages }, false),
      user.id,
    );
  }
}
