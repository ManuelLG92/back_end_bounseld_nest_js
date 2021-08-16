import { NativeLanguage } from 'src/native-language/entities/native-language.entity';
export declare class User {
    id: number;
    name?: string;
    surname?: string;
    age?: number;
    country?: string;
    nativeLanguages?: NativeLanguage[];
}
