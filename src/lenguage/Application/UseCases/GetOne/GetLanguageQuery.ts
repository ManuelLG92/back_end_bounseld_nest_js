import { AppQuery } from 'src/shared/Application';

export class GetLanguageQuery implements AppQuery {
  constructor(public readonly code: string) {}
}
