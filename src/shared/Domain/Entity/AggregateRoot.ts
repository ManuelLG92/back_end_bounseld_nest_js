import { ID } from '../ValueObjects';

export abstract class AggregateRoot {
  protected constructor(protected readonly id: ID) {}
}
