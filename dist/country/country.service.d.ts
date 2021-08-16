import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
export declare class CountryService {
    create(createCountryInput: CreateCountryInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCountryInput: UpdateCountryInput): string;
    remove(id: number): string;
}
