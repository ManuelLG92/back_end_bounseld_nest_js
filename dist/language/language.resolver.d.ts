import { LanguageService } from './language.service';
import { CreateLanguageInput } from './dto/create-language.input';
import { UpdateLanguageInput } from './dto/update-language.input';
export declare class LanguageResolver {
    private readonly languageService;
    constructor(languageService: LanguageService);
    createLanguage(createLanguageInput: CreateLanguageInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateLanguage(updateLanguageInput: UpdateLanguageInput): string;
    removeLanguage(id: number): string;
}
