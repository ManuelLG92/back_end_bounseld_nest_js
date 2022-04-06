import { BadRequestException } from '@nestjs/common';
import { StringVO } from '../../shared/ValueObjects/stringVO';

export class SurnameVO extends StringVO {
  public static MAX_LENGTH = 100;

  protected constructor(value: string) {
    super(value);
    this.validate;
  }

  validate(): void {
    if (
      !this.valuePrimitive ||
      this.valuePrimitive?.length > SurnameVO.MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Surname field cannot be empty or longer than ${SurnameVO.MAX_LENGTH} `,
      );
    }
  }
}
