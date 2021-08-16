import { CreateNativeLanguageInput } from './dto/create-native-language.input';
import { UpdateNativeLanguageInput } from './dto/update-native-language.input';
export declare class NativeLanguageService {
    create(createNativeLanguageInput: CreateNativeLanguageInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNativeLanguageInput: UpdateNativeLanguageInput): string;
    remove(id: number): string;
}
