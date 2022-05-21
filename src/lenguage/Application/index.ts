export * from './UseCases';

export { LanguageRepositoryPort } from './Port';
export * as LanguagePortServices from './Port/Services';

import { GetLanguageHandler, GetManyLanguagesHandler } from './UseCases';

export const QueryHandlers = [GetLanguageHandler, GetManyLanguagesHandler];
