import { ID } from '../ValueObjects/idVO';

export class AggregateRoot {
  public readonly id: ID;

  constructor(id: ID) {
    this.id = id;
  }
}
