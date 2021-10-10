import { Injectable } from '@nestjs/common';

@Injectable()
export class AppRedisService {
  /*constructor(private readonly redisService: RedisService) {}

  private test = this.redisService.getClient('test');

  async root(): Promise<any> {
    const client = this.redisService.getClient('test');
    await client.lpush('test', 'test args');
    return true;
  }*/
}
