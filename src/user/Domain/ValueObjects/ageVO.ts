import { BadRequestException } from '@nestjs/common';
import { NumberNullableVO } from '../../../shared/ValueObjects/numberNullableVO';

export class AgeVO extends NumberNullableVO {
  public static MIN = 18;

  public constructor(value: number) {
    super(value);
    this.validate();
  }

  public validate(): void {
    if (this.valuePrimitive && this.valuePrimitive < AgeVO.MIN) {
      throw new BadRequestException(
        `Age field cannot be empty or less than ${AgeVO.MIN} `,
      );
    }
  }
}
