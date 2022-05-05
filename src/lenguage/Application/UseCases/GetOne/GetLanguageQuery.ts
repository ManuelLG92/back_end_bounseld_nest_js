import { AppQuery } from '../../../../shared/Application/Adapters';

export class GetLanguageQuery implements AppQuery {
  constructor(public readonly id: string) {}
}
