import { RedisService } from 'nestjs-redis';

export class RedisClient {
  constructor(private readonly redisService: RedisService) {}
  async getRedisClient(): Promise<any> {
    return this.redisService.getClient('test');
  }
}
