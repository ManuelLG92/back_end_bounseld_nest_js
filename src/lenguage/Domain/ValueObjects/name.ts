import { BadRequestException } from '@nestjs/common';
import { StringVO } from '../../../shared/Domain/ValueObjects/stringVO';

export class LanguageNameVO extends StringVO {
  public static readonly MAX_LENGTH = 100;

  public constructor(value: string) {
    super(value);
    this.valuePrimitive = value.trim();
    this.validate();
  }

  static create(value: string): LanguageNameVO {
    return new this(value);
  }

  protected validate(): void {
    if (
      !this.valuePrimitive ||
      this.valuePrimitive?.length > LanguageNameVO.MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Language Name field cannot be empty or longer than ${LanguageNameVO.MAX_LENGTH} `,
      );
    }
  }
}
