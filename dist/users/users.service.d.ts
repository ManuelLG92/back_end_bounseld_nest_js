import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly UserRepository;
    constructor(UserRepository: Repository<User>);
    createFixturesUsers(): Promise<void>;
    getAllUsers(): Promise<User[]>;
    getUser(userId: number): Promise<User>;
}
