import { Gender } from '.prisma/client';
export declare class CreateUserInput {
    name: string;
    surname: string;
    age: number;
    gender: Gender;
    countryId: number;
    email: string;
    password: string;
    description?: string;
}
