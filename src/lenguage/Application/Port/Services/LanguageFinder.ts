import { Inject, Injectable } from '@nestjs/common';
import { LanguageRepositoryPort } from '../LanguageRepositoryPort';
import { LanguageProviderConstants } from '../../../constants/repository';
import { ILanguage } from '../../../Domain/language';

@Injectable()
export class LanguageFinder {
  constructor(
    @Inject(LanguageProviderConstants.LANGUAGE_REPOSITORY)
    private languageRepositoryPort: LanguageRepositoryPort,
  ) {}

  async find(code: string): Promise<ILanguage> {
    return await this.languageRepositoryPort.findOne(code);
  }

  async findAll(): Promise<ILanguage[]> {
    return await this.languageRepositoryPort.findAll();
  }
}
