export class StringNullableVO {
  
    protected valuePrimitive: string|null;
  
    protected constructor(value: string|null) {
      this.valuePrimitive = value;
    }
  
    static create(value: string|null) {
      return new this(value);
    }
  
    protected value(): string|null {
      return this.valuePrimitive;
    }
  }