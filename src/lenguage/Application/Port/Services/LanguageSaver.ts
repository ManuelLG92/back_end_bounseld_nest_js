import { Inject, Injectable } from '@nestjs/common';
import { LanguageRepositoryPort } from '../LanguageRepositoryPort';
import { LanguageProviderConstants } from '../../../constants/repository';
import { ILanguageCreate } from '../../../Domain/language';

@Injectable()
export class LanguageSaver {
  constructor(
    @Inject(LanguageProviderConstants.LANGUAGE_REPOSITORY)
    private languageRepositoryPort: LanguageRepositoryPort,
  ) {}

  async save(languageCreate: ILanguageCreate): Promise<string> {
    return await this.languageRepositoryPort.save({ ...languageCreate });
  }
}
