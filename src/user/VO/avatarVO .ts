import { BadRequestException } from '@nestjs/common';
import { StringVO } from '../../shared/ValueObjects/stringVO';

export class AvatarVO extends StringVO {
  public static MAX_LENGTH = 100;

  protected constructor(value: string) {
    super(value);
    this.validate;
  }

  validate(): void {
    if (
      !this.valuePrimitive ||
      this.valuePrimitive?.length > AvatarVO.MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Avatar field cannot be empty or longer than ${AvatarVO.MAX_LENGTH} `,
      );
    }
  }
}
