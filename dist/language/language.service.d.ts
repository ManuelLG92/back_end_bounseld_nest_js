import { CreateLanguageInput } from './dto/create-language.input';
import { UpdateLanguageInput } from './dto/update-language.input';
export declare class LanguageService {
    create(createLanguageInput: CreateLanguageInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLanguageInput: UpdateLanguageInput): string;
    remove(id: number): string;
}
