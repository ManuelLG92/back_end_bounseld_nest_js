import { BadRequestException } from '@nestjs/common';
import { BaseVO } from './BaseVO';

export class NumberVO extends BaseVO {
  
  protected valuePrimitive: number;

  protected constructor(value: number) {
    super();
    this.valuePrimitive = value;
    this.validate();
  }

  static create(value: number) {
    return new this(value);
  }

  protected value(): number {
    return this.valuePrimitive;
  }

  validate(): void {
    if (typeof this.valuePrimitive !== 'number') {
      throw new BadRequestException('Just are allowed number type.');
    }
  }
}
