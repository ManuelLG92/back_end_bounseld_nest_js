import { CreateCountryApiDto } from './dto/create-country-api.dto';
import { UpdateCountryApiDto } from './dto/update-country-api.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
export declare class CountryApiService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: UpdateCountryApiDto): Promise<any>;
    create(createCountryApiDto: CreateCountryApiDto): Promise<any>;
    remove(id: number): Promise<boolean>;
}
