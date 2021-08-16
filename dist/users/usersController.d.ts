import { Response } from 'express';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(res: Response): Promise<Response<any, Record<string, any>>>;
}
