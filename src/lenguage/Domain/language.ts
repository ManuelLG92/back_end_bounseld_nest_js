export interface ILanguage {
  code: string;
  name: string;
}

export class Language {
  public readonly code: string;
  public readonly name: string;

  constructor(code: string, name: string) {
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
