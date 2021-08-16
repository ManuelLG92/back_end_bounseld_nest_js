import { CountryService } from './country.service';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
export declare class CountryResolver {
    private readonly countryService;
    constructor(countryService: CountryService);
    createCountry(createCountryInput: CreateCountryInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateCountry(updateCountryInput: UpdateCountryInput): string;
    removeCountry(id: number): string;
}
