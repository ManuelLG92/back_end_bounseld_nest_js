import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<import(".prisma/client").User>;
    findAll(): Promise<(import(".prisma/client").User & {
        country: import(".prisma/client").Country;
        learningLanguages: (import(".prisma/client").LearningLanguage & {
            language: import(".prisma/client").Language;
        })[];
        nativeLanguages: (import(".prisma/client").NativeLanguage & {
            language: import(".prisma/client").Language;
        })[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").User & {
        country: import(".prisma/client").Country;
        learningLanguages: (import(".prisma/client").LearningLanguage & {
            language: import(".prisma/client").Language;
        })[];
        nativeLanguages: (import(".prisma/client").NativeLanguage & {
            language: import(".prisma/client").Language;
        })[];
    }>;
    updateUser(updateUserInput: UpdateUserInput): Promise<import(".prisma/client").User>;
    removeUser(id: number): Promise<boolean>;
}
