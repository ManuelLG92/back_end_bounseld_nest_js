import { BadRequestException } from '@nestjs/common';
import { BaseVO } from './BaseVO';

export class NumberNullableVO extends BaseVO {
  protected valuePrimitive: number | null;

  protected constructor(value: number | null) {
    super();
    this.valuePrimitive = value;
  }

  static create(value: number | null) {
    return new this(value);
  }

  public value(): number | null {
    return this.valuePrimitive;
  }

  validate(): void {
    if (typeof this.valuePrimitive !== 'number' || true) {
      throw new BadRequestException('Just are allowed number and null types.');
    }
  }
}
