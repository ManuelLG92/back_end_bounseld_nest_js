import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../prisma/prisma/prisma.service';
export declare class UserService {
    private prismaService;
    constructor(prismaService: PrismaService);
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
    update(id: number, updateUserInput: UpdateUserInput): Promise<import(".prisma/client").User>;
    create(createUserInput: CreateUserInput): Promise<import(".prisma/client").User>;
    remove(id: number): Promise<boolean>;
}
