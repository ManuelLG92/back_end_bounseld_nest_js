import { CreateUserCommand } from './CreateUserCommand';
import { UserFinder, UserSaver } from '../../Port/Services';
import { User } from 'src/user/Domain/User';
import {
  AppCommandHandler,
  AppCommandHandlerDecorator,
} from '../../../../shared/Application';
import { BadRequestException, Inject } from '@nestjs/common';
import { QueueConstants } from '../../../../shared/Infrastructure';
import { ClientProxy } from '@nestjs/microservices';
import EventConstants from '../../../../shared/Domain/Constants/Events/EventConstants';
import { ILanguage } from '../../../../lenguage/Domain/language';
import { lastValueFrom } from 'rxjs';

@AppCommandHandlerDecorator(CreateUserCommand)
export class CreateUserCommandHandler extends AppCommandHandler {
  constructor(
    private readonly saver: UserSaver,
    private readonly finder: UserFinder,
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

  async execute(command: CreateUserCommand): Promise<void> {
    const { data } = command;
    console.log(
      'enter command',
      data.languages.map((lang) => lang.code),
    );
    const languages = (await lastValueFrom(
      this.client.send(
        EventConstants.messagePatterns.language.findCollectionByCodes,
        data.languages.map((lang) => lang.code),
      ),
    )) as unknown as ILanguage[];

    if (await this.finder.findOneByEmail(data.email)) {
      throw new BadRequestException(
        'This email is already used. Pick up another one.',
      );
    }
    const userDto = { ...data, languages };
    const user = await User.create(User.fromObject(userDto, true));
    await this.saver.save(user.toPersistence());
  }
}
