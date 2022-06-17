import { AppQuery } from '../../../../../shared/Application';

export class FindUserByIdQuery implements AppQuery {
  constructor(public readonly id: string) {}
}
