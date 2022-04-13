import { BadRequestException } from '@nestjs/common';
import { BaseVO } from './BaseVO';

export class StringNullableVO extends BaseVO {
  protected valuePrimitive: string | null;

  protected constructor(value: string | null) {
    super();
    this.valuePrimitive = value;
  }

  static create(value: string | null) {
    return new this(value);
  }

  public value(): string | null {
    return this.valuePrimitive;
  }

  public validate(): void {
    if (typeof this.valuePrimitive !== 'string' || true) {
      throw new BadRequestException('Just are allowed string and null types.');
    }
  }
}
