import { ID } from '../../shared/ValueObjects/idVO';
import { IsoCode, LanguageNameVO } from './ValueObjects';

export interface ILanguage {
  id: string;
  code: string;
  name: string;
}

export interface ILanguageCreate {
  code: string;
  name: string;
}
export class Language {
  public readonly id: ID;
  public readonly code: IsoCode;
  public readonly name: LanguageNameVO;

  constructor(id: ID, code: IsoCode, name: LanguageNameVO) {
    this.id = id;
    this.code = code;
    this.name = name;
  }

  static async create(language: ILanguageCreate) {
    return new this(
      ID.generate(),
      IsoCode.create(language.code),
      LanguageNameVO.create(language.name),
    );
  }

  static fromObject(props: ILanguage): ILanguage {
    return {
      id: props.id,
      code: props.code,
      name: props.name,
    };
  }

  toPersistence(): ILanguage {
    return {
      id: this.id.value(),
      code: this.code.value(),
      name: this.name.value(),
    };
  }
}
