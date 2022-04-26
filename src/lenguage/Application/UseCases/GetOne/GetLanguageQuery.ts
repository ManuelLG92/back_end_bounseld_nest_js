import { AppQuery } from '../../../../shared/Application/Adapters/AppCqrsBus';

export class GetLanguageQuery implements AppQuery {
  constructor(public readonly id: string) {}
}
