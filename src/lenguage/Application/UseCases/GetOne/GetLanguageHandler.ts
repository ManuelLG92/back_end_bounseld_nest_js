import {
  AppQueryHandler,
  AppQueryHandlerDecorator,
} from '../../../../shared/Application/Adapters/AppCqrsBus';
import { GetLanguageQuery } from './GetLanguageQuery';
import { LanguageFinder } from '../../Port/Services';

@AppQueryHandlerDecorator(GetLanguageQuery)
export class GetLanguageHandler extends AppQueryHandler {
  constructor(private readonly finder: LanguageFinder) {
    super();
  }
  async execute(command: GetLanguageQuery): Promise<void> {
    const { id } = command;
    const language = await this.finder.find(id);
    console.log(language, id);
  }
}
