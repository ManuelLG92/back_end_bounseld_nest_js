import { BadRequestException } from '@nestjs/common';
import { NumberVO } from 'src/shared/ValueObjects/numberVO';

export class AgeVO extends NumberVO {

  public static MIN = 8;

  protected constructor(value: number) {
    super(value);
    this.validate;
  }

  validate(): void {
    if (
      !this.valuePrimitive 
      ||
      this.valuePrimitive < AgeVO.MIN 
    ) {
      throw new BadRequestException(
        `Age field cannot be empty or less than ${AgeVO.MIN} `,
      );
    }
  }
}
