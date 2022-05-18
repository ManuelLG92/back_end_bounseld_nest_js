import {
  AppQueryHandler,
  AppQueryHandlerDecorator,
} from '../../../../shared/Application';
import { GetLanguageQuery } from './GetLanguageQuery';
import { LanguageFinder } from '../../Port/Services';
import { ILanguage, Language } from '../../../Domain/language';

@AppQueryHandlerDecorator(GetLanguageQuery)
export class GetLanguageHandler extends AppQueryHandler {
  constructor(private readonly finder: LanguageFinder) {
    super();
  }
  async execute(command: GetLanguageQuery): Promise<ILanguage | null> {
    const { code } = command;

    const language = await this.finder.find(code);

    return Language.fromObject(language);
  }
}
