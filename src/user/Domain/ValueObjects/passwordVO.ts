import { BadRequestException } from '@nestjs/common';
import { StringVO } from '../../../shared/ValueObjects/stringVO';

export class PasswordVO extends StringVO {
  public static MAX_LENGTH = 255;
  public static MIN_LENGTH = 8;

  public constructor(value: string) {
    super(value);
    this.valuePrimitive = value.trim();
    this.validate();
  }

  protected validate(): void {
    if (
      !this.valuePrimitive ||
      this.valuePrimitive?.length > PasswordVO.MAX_LENGTH ||
      this.valuePrimitive?.length < PasswordVO.MIN_LENGTH
    ) {
      throw new BadRequestException(
        `Password field cannot be empty or longer than ${PasswordVO.MAX_LENGTH} `,
      );
    }
  }
}
