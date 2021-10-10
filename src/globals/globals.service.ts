import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class GlobalsService {
  async setData(value: string) {
    return await bcrypt.hash(value, await bcrypt.genSalt());
  }

  async getData(value: string, hash: string) {
    return await bcrypt.compare(value, hash);
  }
}
