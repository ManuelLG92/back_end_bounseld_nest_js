export class NumberNullableVO {
  
    protected valuePrimitive: number|null;
  
    protected constructor(value: number|null) {
      this.valuePrimitive = value;
    }
  
    static create(value: number|null) {
      return new this(value);
    }
  
    protected value(): number|null {
      return this.valuePrimitive;
    }
  }