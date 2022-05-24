import { BadRequestException } from '@nestjs/common';
import { NumberNullableVO } from '../../../shared/Domain/ValueObjects/numberNullableVO';

export class AgeVO extends NumberNullableVO {
  public static MIN = 18;

  public constructor(value: number | null) {
    super(value);
    this.validate();
  }

  public validate(): void {
    if (this.valuePrimitive && this.valuePrimitive < AgeVO.MIN) {
      throw new BadRequestException(
        `Age field if its present, it cannot be less than ${AgeVO.MIN} `,
      );
    }
  }
}
