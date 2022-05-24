import { Inject, Injectable } from '@nestjs/common';
import { LanguageRepositoryPort } from '../LanguageRepositoryPort';
import { ILanguage } from '../../../Domain/language';
import { RepositoryProviders } from 'src/shared/Infrastructure';

@Injectable()
export class LanguageFinder {
  constructor(
    @Inject(RepositoryProviders.LANGUAGE_REPOSITORY)
    private readonly languageRepositoryPort: LanguageRepositoryPort,
  ) {}

  async find(code: string): Promise<ILanguage> {
    return await this.languageRepositoryPort.findOne(code);
  }

  async findAll(): Promise<ILanguage[]> {
    return await this.languageRepositoryPort.findAll();
  }

  async findManyByCodes(codes: Array<string>): Promise<ILanguage[]> {
    return await this.languageRepositoryPort.findManyByCodes(codes);
  }
}
