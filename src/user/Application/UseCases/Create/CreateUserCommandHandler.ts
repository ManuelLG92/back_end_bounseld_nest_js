import { CreateUserCommand } from './CreateUserCommand';
import { User } from 'src/user/Domain/User';
import {
  AppCommandHandler,
  AppCommandHandlerDecorator,
} from 'src/shared/Application';
import { BadRequestException, Inject } from '@nestjs/common';
import { QueueConstants } from 'src/shared/Infrastructure';
import { ClientProxy } from '@nestjs/microservices';
import EventConstants from '../../../../shared/Domain/Constants/Events/EventConstants';
import { lastValueFrom } from 'rxjs';
import { UserFinder, UserSaver } from '../../Port/Services';
import { IUserLanguage } from '../../../Domain/Interfaces';
import { IdentifierResponse } from 'src/shared/Infrastructure/HttpHandlers/Response';

@AppCommandHandlerDecorator(CreateUserCommand)
export class CreateUserCommandHandler extends AppCommandHandler {
  constructor(
    private readonly saver: UserSaver,
    private readonly finder: UserFinder,
    @Inject(QueueConstants.USER_CLIENT)
    private readonly client: ClientProxy,
  ) {
    super();
  }

  async onModuleInit() {
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  async execute(command: CreateUserCommand): Promise<IdentifierResponse> {
    const { data } = command;
    console.log(
      'enter command',
      data.languages.map((lang) => lang.code),
    );

    const languageCodes = data.languages.map((lang) => lang.code);

    let languages = [];
    if (languageCodes.length) {
      languages = (await lastValueFrom(
        this.client.send(
          EventConstants.messagePatterns.language.findCollectionByCodes,
          data.languages.map((lang) => lang.code),
        ),
      )) as unknown as IUserLanguage[];
    }
    /*const languages = (await lastValueFrom(
      this.client.send(
        EventConstants.messagePatterns.language.findCollectionByCodes,
        data.languages.map((lang) => lang.code),
      ),
    )) as unknown as ILanguage[];*/

    if (await this.finder.findOneByEmail(data.email)) {
      throw new BadRequestException(
        'This email is already used. Pick up another one.',
      );
    }
    const userDto = { ...data, languages };
    const user = await User.create(User.fromObject(userDto, true));
    await this.saver.save(user.toPersistence());

    return { id: user.id.value() };
  }
}
