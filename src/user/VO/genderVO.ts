import { BadRequestException } from '@nestjs/common';
import { StringVO } from '../../shared/ValueObjects/stringVO';

export enum gender {
  MALE = 'male',
  FEMALE = 'female',
  PREFER_NOT_SAY = 'prefer_not_say',
}
export class GenderVO extends StringVO {
  public static MAX_LENGTH = 100;

  public constructor(value: string) {
    super(value);
    this.validate();
  }

  protected validate(): void {
    const values = new ObjectVO(gender);
    if (!values.exists(this.valuePrimitive)) {
      throw new BadRequestException(
        `Gender field cannot be empty and the option are: ${Object.values(
          gender,
        )
          .map((item) => item)
          .join(', ')} `,
      );
    }
  }
}
