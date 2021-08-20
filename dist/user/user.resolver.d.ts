import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
export declare class UserResolver implements OnModuleInit {
    private clientKafka;
    private readonly userService;
    private kafkaProducer;
    constructor(clientKafka: ClientKafka, userService: UserService);
    onModuleInit(): Promise<void>;
    createUser(createUserInput: CreateUserInput): Promise<import(".prisma/client").User>;
    findAll(): Promise<(import(".prisma/client").User & {
        country: import(".prisma/client").Country;
        nativeLanguages: (import(".prisma/client").NativeLanguage & {
            language: import(".prisma/client").Language;
        })[];
        learningLanguages: (import(".prisma/client").LearningLanguage & {
            language: import(".prisma/client").Language;
        })[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").User & {
        country: import(".prisma/client").Country;
        nativeLanguages: (import(".prisma/client").NativeLanguage & {
            language: import(".prisma/client").Language;
        })[];
        learningLanguages: (import(".prisma/client").LearningLanguage & {
            language: import(".prisma/client").Language;
        })[];
    }>;
    updateUser(updateUserInput: UpdateUserInput): Promise<import(".prisma/client").User>;
    removeUser(id: number): Promise<boolean>;
    sendEmail(message: any): {
        reply: string;
    };
}
