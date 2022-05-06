import { v4 as uuidV4, validate } from 'uuid';
import { StringVO } from './stringVO';
import { BadRequestException } from '@nestjs/common';

export class ID extends StringVO {
  constructor(valuePrimitive: string) {
    super(valuePrimitive);
    this.validate();
  }

  static fromString(value: string) {
    return new this(value);
  }
  static generate(): ID {
    return new this(uuidV4());
  }

  protected validate(): void {
    if (!validate(this.valuePrimitive)) {
      throw new BadRequestException(
        `Incorrect Uuid format. "${this.valuePrimitive}"`,
      );
    }
  }
}
