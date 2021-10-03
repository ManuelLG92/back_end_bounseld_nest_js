import { Injectable } from '@nestjs/common';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { UserService } from '../user/user.service';
@Injectable()
export class CountryService {
  constructor(
    /* @Inject('KAFKA_BROKER')
    private clientKafka: ClientKafka,
*/
    private readonly userService: UserService,
  ) {}
  async create(CountryService: CreateCountryInput) {
    return `This action creates a country`;
  }

  findAll() {
    return `This action returns all country`;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryInput: UpdateCountryInput) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
