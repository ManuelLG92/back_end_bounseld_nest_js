import { User } from 'src/user/Domain/User';
import { AppCommandHandler } from 'src/shared/Application';
import {
  BadRequestException,
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { QueueConstants } from 'src/shared/Infrastructure';
import { ClientProxy } from '@nestjs/microservices';
import EventConstants from '../../../../shared/Domain/Constants/Events/EventConstants';
import { lastValueFrom } from 'rxjs';
import { UserFinder, UserSaver } from '../../Port/Services';
import {
  ICreateUserPrimitives,
  IUserLanguage,
} from '../../../Domain/Interfaces';
import { IdentifierResponse } from 'src/shared/Infrastructure/HttpHandlers/Response';

@Injectable()
export class CreateUserCommandHandler
  extends AppCommandHandler
  implements OnModuleInit, OnModuleDestroy
{
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

  async execute(data: ICreateUserPrimitives): Promise<IdentifierResponse> {
    await this.checkIfUserAlreadyExistsByEmail(data.email);
    const languageCodes = data.languages?.map((lang) => lang.code) ?? [];
    let languages = [];
    if (languageCodes.length) {
      languages = await this.getLanguagesByCode(languageCodes);
    }
    const user = await User.create(
      User.fromObject({ ...data, languages }, true),
    );
    await this.saver.save(user.toPersistence());
    return { id: user.id.value() };
  }

  private async checkIfUserAlreadyExistsByEmail(email: string): Promise<void> {
    if (await this.finder.findOneByEmail(email)) {
      throw new BadRequestException(
        'This email is already used. Pick up another one.',
      );
    }
  }

  private async getLanguagesByCode(codes: string[]) {
    return (await lastValueFrom(
      this.client.send(
        EventConstants.messagePatterns.language.findCollectionByCodes,
        codes,
      ),
    )) as unknown as IUserLanguage[];
  }
}
