import { Inject, Injectable } from '@nestjs/common';
import { IUserLanguage } from '../../../Domain/Interfaces';
import { lastValueFrom } from 'rxjs';
import EventConstants from '../../../../shared/Domain/Constants/Events/EventConstants';
import { QueueConstants } from '../../../../shared/Infrastructure';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class GetLanguages {
  constructor(
    @Inject(QueueConstants.USER_CLIENT)
    private client: ClientProxy,
  ) {}
  async onModuleInit() {
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }
  async send(codes: string[]) {
    let languages = [];
    if (codes.length) {
      languages = await this.getLanguagesByCode(codes);
    }
    return languages;
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
