import { LearningLanguage } from 'src/learning-language/entities/learning-language.entity';
import { NativeLanguage } from 'src/native-language/entities/native-language.entity';
export declare class User {
    id: number;
    name?: string;
    surname?: string;
    age?: number;
    country?: string;
    nativeLanguages?: NativeLanguage[];
    learningLanguages?: LearningLanguage[];
}
