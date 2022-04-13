import { BadRequestException } from '@nestjs/common';
import { StringNullableVO } from '../../../shared/ValueObjects/stringNullableVO';

export class AvatarVO extends StringNullableVO {
  public static MAX_LENGTH = 100;

  public constructor(value: string) {
    super(value);
    this.validate();
  }

  public validate(): void {
    if (
      this.valuePrimitive &&
      this.valuePrimitive?.length > AvatarVO.MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Avatar field cannot be empty or longer than ${AvatarVO.MAX_LENGTH} `,
      );
    }
  }
}
