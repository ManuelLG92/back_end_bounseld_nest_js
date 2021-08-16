import { LearningLanguageService } from './learning-language.service';
import { CreateLearningLanguageInput } from './dto/create-learning-language.input';
import { UpdateLearningLanguageInput } from './dto/update-learning-language.input';
export declare class LearningLanguageResolver {
    private readonly learningLanguageService;
    constructor(learningLanguageService: LearningLanguageService);
    createLearningLanguage(createLearningLanguageInput: CreateLearningLanguageInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateLearningLanguage(updateLearningLanguageInput: UpdateLearningLanguageInput): string;
    removeLearningLanguage(id: number): string;
}
