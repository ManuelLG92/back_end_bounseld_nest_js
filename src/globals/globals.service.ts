import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class GlobalsService {
  async encryptData(value: string) {
    return await bcrypt.hash(value, await bcrypt.genSalt());
  }

  async compareEncryptedData(value: string, hash: string) {
    return await bcrypt.compare(value, hash);
  }
}
