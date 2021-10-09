import { Injectable } from '@nestjs/common';

@Injectable()
export class Countries {
  countries = ['Spain'];

  findCountry(name: string) {
    return Countries[name];
  }
}
