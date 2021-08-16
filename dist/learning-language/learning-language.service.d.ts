import { CreateLearningLanguageInput } from './dto/create-learning-language.input';
import { UpdateLearningLanguageInput } from './dto/update-learning-language.input';
export declare class LearningLanguageService {
    create(createLearningLanguageInput: CreateLearningLanguageInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLearningLanguageInput: UpdateLearningLanguageInput): string;
    remove(id: number): string;
}
