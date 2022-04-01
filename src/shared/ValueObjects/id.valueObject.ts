import { v4 as uuidV4, validate } from 'uuid';
import { StringVO } from './stringVO';
import { BadRequestException } from '@nestjs/common';

export class ID extends StringVO {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  static generate(): ID {
    return new ID(uuidV4());
  }

  protected validate(value: string): void {
    if (!validate(value)) {
      throw new BadRequestException(`Incorrect Uuid format "${value}"`);
    }
  }
}
