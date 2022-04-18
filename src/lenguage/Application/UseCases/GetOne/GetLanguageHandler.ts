import {
  AppQueryHandler,
  AppQueryHandlerDecorator,
} from '../../../../Infrastructure/AppCqrsBus';
import { GetLanguageQuery } from './GetLanguageQuery';

@AppQueryHandlerDecorator(GetLanguageQuery)
export class GetLanguageHandler implements AppQueryHandler {
  async execute(command: GetLanguageQuery): Promise<void> {
    const { id } = command;
    console.log(id);
  }
}
