import { StringVO } from '../../../shared/ValueObjects/stringVO';
import { BadRequestException } from '@nestjs/common';

export class IsoCode extends StringVO {
  public static readonly MAX_LENGTH = 3;
  public static readonly MIN_LENGTH = 2;

  protected valuePrimitive: string;

  protected constructor(value: string) {
    super(value);
    this.valuePrimitive = value.trim();
    this.validate();
  }

  static create(value: string): IsoCode {
    return new this(value);
  }

  protected validate(): void {
    if (
      !this.valuePrimitive ||
      this.valuePrimitive?.length > IsoCode.MAX_LENGTH ||
      this.valuePrimitive?.length < IsoCode.MIN_LENGTH
    )
      throw new BadRequestException(
        `Name field cannot be empty, less than ${IsoCode.MIN_LENGTH} or longer than ${IsoCode.MAX_LENGTH} `,
      );
  }
}
