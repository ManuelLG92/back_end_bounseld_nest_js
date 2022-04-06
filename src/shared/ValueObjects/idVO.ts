import { v4 as uuidV4, validate } from 'uuid';
import { StringVO } from './stringVO';
import { BadRequestException } from '@nestjs/common';

export class ID extends StringVO {
  constructor(valuePrimitive: string) {
    super(valuePrimitive);
    this.validate(valuePrimitive);
  }

  static fromString(value: string) {
    return new this(value);
  }
  static generate(): ID {
    return new this(uuidV4());
  }

  protected validate(value: string): void {
    if (!validate(value)) {
      throw new BadRequestException(`Incorrect Uuid format. "${value}"`);
    }
  }
}
