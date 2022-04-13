import { BadRequestException } from '@nestjs/common';
import { StringVO } from '../../../shared/ValueObjects/stringVO';

export class EmailVo extends StringVO {
  protected constructor(value: string) {
    super(value);
    this.valuePrimitive = EmailVo.format(value);
    this.validate();
  }

  static create(value: string): EmailVo {
    return new this(value);
  }

  static format(email: string): string {
    return email.trim().toLowerCase();
  }

  protected validate(): void {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (!regex.test(this.valuePrimitive)) {
      throw new BadRequestException(
        `Email not valid. "${this.valuePrimitive}"`,
      );
    }
  }
}
