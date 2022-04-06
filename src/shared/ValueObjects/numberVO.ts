export class NumberVO {
  
    protected valuePrimitive: number;
  
    protected constructor(value: number) {
      this.valuePrimitive = value;
    }
  
    static create(value: number) {
      return new this(value);
    }
  
    protected value(): number {
      return this.valuePrimitive;
    }
  }