import { BadRequestException } from '@nestjs/common';
import { StringVO } from '../../shared/ValueObjects/stringVO';

export class NameVO extends StringVO {
  public static MAX_LENGTH = 100;

  protected constructor(value: string) {
    super(value);
    this.valuePrimitive = value.trim();
    this.validate;
  }

  validate(): void {
    if (
      !this.valuePrimitive ||
      this.valuePrimitive?.length > NameVO.MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Name field cannot be empty or longer than ${NameVO.MAX_LENGTH} `,
      );
    }
  }
}
