import { StringVO } from './stringVO';

export class EmailVo extends StringVO {
  protected constructor(value: string) {
    super(value);
    this.value = EmailVo.format(value);
  }

  static create(value: string) {
    return new this(value);
  }

  static format(email: string): string {
    return email.trim().toLowerCase();
  }
}
