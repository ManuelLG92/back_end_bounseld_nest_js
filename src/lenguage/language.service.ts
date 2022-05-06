import { Inject, Injectable } from '@nestjs/common';
import { RepositoryProviders } from '../shared/Infrastructure';
import { LanguageRepositoryPort } from './Application';
import { Language } from './Domain/language';

@Injectable()
export class LanguageService {
  constructor(
    @Inject(RepositoryProviders.LANGUAGE_REPOSITORY)
    private readonly repository: LanguageRepositoryPort,
  ) {}

  async findAll() {
    const languages = await this.repository.findAll();
    return languages.map((language) => Language.fromObject(language));
  }

  async findOne(code: string) {
    const language = await this.repository.findOne(code);
    return Language.fromObject(language);
  }
}
