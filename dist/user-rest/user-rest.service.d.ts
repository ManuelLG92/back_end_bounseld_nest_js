import { CreateUserRestDto } from './dto/create-user-rest.dto';
import { UpdateUserRestDto } from './dto/update-user-rest.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
export declare class UserRestService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createUserRestDto: CreateUserRestDto): Promise<import(".prisma/client").User>;
    findAll(): Promise<import(".prisma/client").User[]>;
    findOne(id: string): Promise<import(".prisma/client").User>;
    update(id: string, updateUserRestDto: UpdateUserRestDto): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").User>;
}
