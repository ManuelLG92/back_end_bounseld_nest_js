import {
  AppQueryHandler,
  AppQueryHandlerDecorator,
} from '../../../../shared/Application/Adapters/AppCqrsBus';
import { GetLanguageQuery } from './GetLanguageQuery';
import { LanguageFinder } from '../../Port/Services';
import { ILanguage, Language } from '../../../Domain/language';

@AppQueryHandlerDecorator(GetLanguageQuery)
export class GetLanguageHandler extends AppQueryHandler {
  constructor(private readonly finder: LanguageFinder) {
    super();
  }
  async execute(command: GetLanguageQuery): Promise<ILanguage> {
    const { id } = command;
    const language = await this.finder.find(id);
    return Language.fromObject(language);
  }
}
