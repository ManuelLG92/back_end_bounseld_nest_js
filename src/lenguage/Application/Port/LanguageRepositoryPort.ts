import { Injectable } from '@nestjs/common';
import { Language } from '../../Domain/language';

@Injectable()
export abstract class LanguageRepositoryPort {
  abstract findAll(): Promise<Language[]>;
  abstract findOne(id: string): Promise<Language>;
  abstract findManyByCodes(codes: Array<string>): Promise<Language[]>;
}
