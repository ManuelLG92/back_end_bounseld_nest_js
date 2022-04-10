import { BadRequestException } from '@nestjs/common';
import { BaseVO } from './BaseVO';

export class StringVO extends BaseVO {
  protected valuePrimitive: string;

  protected constructor(value: string) {
    super();
    this.valuePrimitive = value.trim();
    this.validate();
  }

  static create(value: string): StringVO {
    return new this(value);
  }

  protected value(): string {
    return this.valuePrimitive;
  }

  protected validate(): void {
    if (typeof this.valuePrimitive !== 'string') {
      throw new BadRequestException('Just are allowed string type.');
    }
  }
}
