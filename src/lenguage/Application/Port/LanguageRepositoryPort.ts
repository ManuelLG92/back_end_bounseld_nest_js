import { Injectable } from '@nestjs/common';
import { ILanguage, ILanguageCreate } from '../../Domain/language';

@Injectable()
export abstract class LanguageRepositoryPort {
  abstract save(user: ILanguageCreate): Promise<string>;
  abstract findAll(): Promise<ILanguage[]>;
  abstract findOne(id: string): Promise<ILanguage>;
  abstract remove(id: string): Promise<void>;
}
