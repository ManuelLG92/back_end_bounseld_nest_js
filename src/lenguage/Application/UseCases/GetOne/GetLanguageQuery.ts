import { AppQuery } from '../../../../Infrastructure/AppCqrsBus';

export class GetLanguageQuery implements AppQuery {
  constructor(public readonly id: string) {}
}
