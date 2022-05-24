import { IsoCode, LanguageNameVO } from './ValueObjects';

export interface ILanguage {
  code: string;
  name: string;
}

export class Language {
  public readonly code: IsoCode;
  public readonly name: LanguageNameVO;

  constructor(code: IsoCode, name: LanguageNameVO) {
    this.code = code;
    this.name = name;
  }

  static fromObject(props: ILanguage | null): ILanguage | null {
    if (!props) {
      return null;
    }
    return {
      code: props.code,
      name: props.name,
    };
  }
}
