export { LanguageRepositoryPort } from './Port';
export * as LanguagePortServices from './Port/Services';

import { GetLanguageHandler } from './UseCases';

export const QueryHandlers = [GetLanguageHandler];
