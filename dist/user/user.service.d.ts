import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { GlobalsService } from '../globals/globals.service';
import { IRequestDetail } from '../util';
export declare class UserService {
    private prismaService;
    private globalService;
    constructor(prismaService: PrismaService, globalService: GlobalsService);
    create(createUserRestDto: CreateUserDto, reqDetails: IRequestDetail): Promise<import(".prisma/client").User>;
    findAll(): Promise<import(".prisma/client").User[]>;
    findOne(id: string): Promise<import(".prisma/client").User>;
    findOneByEmail(email: string): Promise<import(".prisma/client").User>;
    update(id: string, updateUserRestDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    private cleanUpUserLanguages;
    private static getItemsWithoutEmptyCodes;
    remove(id: string): Promise<import(".prisma/client").User>;
}
