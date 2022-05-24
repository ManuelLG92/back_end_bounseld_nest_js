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

  public value(): boolean {
    return this.valuePrimitive;
  }

  public isTrue(): boolean {
    return this.valuePrimitive === true;
  }

  validate(): void {
    if (typeof this.valuePrimitive !== 'boolean') {
      throw new BadRequestException('Just are allowed boolean type.');
    }
  }
}
