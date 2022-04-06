export class StringVO {
  
  protected valuePrimitive: string;

  protected constructor(value: string) {
    this.valuePrimitive = value;
  }

  static create(value: string) {
    return new this(value);
  }

  protected value(): string {
    return this.valuePrimitive;
  }
}
