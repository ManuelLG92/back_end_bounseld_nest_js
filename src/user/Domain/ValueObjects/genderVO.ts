import { BadRequestException } from '@nestjs/common';
import { StringNullableVO } from '../../../shared/ValueObjects/stringNullableVO';
import { ObjectVO } from '../../../shared/ValueObjects/objectVO';

export enum gender {
  MALE = 'male',
  FEMALE = 'female',
  PREFER_NOT_SAY = 'prefer_not_say',
}

export class GenderVO extends StringNullableVO {
  public static MAX_LENGTH = 100;

  public constructor(value: undefined | null | string) {
    super(value);
    this.validate();
    this.valuePrimitive = value;
  }

  public validate(): void {
    const values = new ObjectVO(gender);
    if (this.valuePrimitive && !values.exists(this.valuePrimitive)) {
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
