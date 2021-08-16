import { NativeLanguageService } from './native-language.service';
import { CreateNativeLanguageInput } from './dto/create-native-language.input';
import { UpdateNativeLanguageInput } from './dto/update-native-language.input';
export declare class NativeLanguageResolver {
    private readonly nativeLanguageService;
    constructor(nativeLanguageService: NativeLanguageService);
    createNativeLanguage(createNativeLanguageInput: CreateNativeLanguageInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateNativeLanguage(updateNativeLanguageInput: UpdateNativeLanguageInput): string;
    removeNativeLanguage(id: number): string;
}
