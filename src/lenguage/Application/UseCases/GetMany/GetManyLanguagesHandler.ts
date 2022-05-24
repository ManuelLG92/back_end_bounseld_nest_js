import {
  AppQueryHandler,
  AppQueryHandlerDecorator,
} from 'src/shared/Application';
import { GetManyLanguagesQuery } from './GetManyLanguagesQuery';
import { LanguageFinder } from '../../Port/Services';
import { ILanguage, Language } from '../../../Domain/language';

@AppQueryHandlerDecorator(GetManyLanguagesQuery)
export class GetManyLanguagesHandler extends AppQueryHandler {
  constructor(private readonly finder: LanguageFinder) {
    super();
  }
  async execute(command: GetManyLanguagesQuery): Promise<ILanguage[]> {
    const { codes } = command;

    const languages = await this.finder.findManyByCodes(codes);

    return languages.map((language) => Language.fromObject(language));
  }
}
