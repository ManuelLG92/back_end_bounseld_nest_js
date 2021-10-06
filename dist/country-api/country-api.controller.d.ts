import { CountryApiService } from './country-api.service';
import { CreateCountryApiDto } from './dto/create-country-api.dto';
import { UpdateCountryApiDto } from './dto/update-country-api.dto';
export declare class CountryApiController {
    private readonly countryApiService;
    constructor(countryApiService: CountryApiService);
    create(createCountryApiDto: CreateCountryApiDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateCountryApiDto: UpdateCountryApiDto): Promise<any>;
    remove(id: string): Promise<boolean>;
}
