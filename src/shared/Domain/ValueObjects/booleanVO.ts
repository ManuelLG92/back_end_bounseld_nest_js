import { BadRequestException } from '@nestjs/common';
import { BaseVO } from './BaseVO';

export class BooleanVO extends BaseVO {
  protected valuePrimitive: boolean;

  protected constructor(value: boolean) {
    super();
    this.valuePrimitive = value;
    this.validate();
  }

  static create(value: undefined | null | boolean) {
    return new this(value ?? false);
  }

  protected value(): boolean {
    return this.valuePrimitive;
  }

  protected isTrue(): boolean {
    return this.valuePrimitive === true;
  }

  validate(): void {
    if (typeof this.valuePrimitive !== 'boolean') {
      throw new BadRequestException('Just are allowed boolean type.');
    }
  }
}
