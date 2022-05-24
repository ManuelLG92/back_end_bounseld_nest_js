import { UserFinder, UserSaver } from '../../Port/Services';
import { User } from 'src/user/Domain/User';
import {
  AppCommandHandler,
  AppCommandHandlerDecorator,
} from '../../../../shared/Application';
import { Inject } from '@nestjs/common';
import { QueueConstants, RepositoryProviders } from 'src/shared/Infrastructure';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateUserCommand } from './UpdateUserCommand';
import { lastValueFrom } from 'rxjs';
import EventConstants from '../../../../shared/Domain/Constants/Events/EventConstants';
import { ILanguage } from '../../../../lenguage/Domain/language';
import { UpdateUserFactoryVO } from '../Services';
import { UserRepositoryPort } from '../../Port';

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

    const factoryVO = await UpdateUserFactoryVO(data);

    const languages = (await lastValueFrom(
      this.client.send(
        EventConstants.messagePatterns.language.findCollectionByCodes,
        factoryVO.languages,
      ),
    )) as unknown as ILanguage[];

    const userEntity = await User.create(
      User.fromObject({ ...userExistingData, languages }),
    );

    userEntity.update(factoryVO);

    await this.repo.save(userEntity.toPersistence());
  }
}
