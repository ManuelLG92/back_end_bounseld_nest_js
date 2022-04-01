export class StringVO {
  protected value: string;

  protected constructor(value: string) {
    this.value = value;
  }

  static create(value: string) {
    return new this(value);
  }

  protected getValue(): string {
    return this.value;
  }
}
