import { AppQuery } from '../../../../shared/Application';

export class GetManyLanguagesQuery implements AppQuery {
  constructor(public readonly codes: Array<string>) {}
}
