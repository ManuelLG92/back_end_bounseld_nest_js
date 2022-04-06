import { BadRequestException } from '@nestjs/common';
import { StringVO } from './stringVO';

export class EmailVo extends StringVO {
  protected constructor(value: string) {
    super(value);
    this.value = EmailVo.format(value);
    this.validate;
  }

  static create(value: string) {
    return new this(value);
  }

  static format(email: string): string {
    return email.trim().toLowerCase();
  }

  validate(): void {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regex.test(this.value)) {
      throw new BadRequestException(`Email not valid. "${this.value}"`);
    }

  }
}
