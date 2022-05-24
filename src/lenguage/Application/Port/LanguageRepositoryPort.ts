import { Injectable } from '@nestjs/common';
import { ILanguage } from '../../Domain/language';

@Injectable()
export abstract class LanguageRepositoryPort {
  abstract findAll(): Promise<ILanguage[]>;
  abstract findOne(id: string): Promise<ILanguage>;
  abstract findManyByCodes(codes: Array<string>): Promise<ILanguage[]>;
}
