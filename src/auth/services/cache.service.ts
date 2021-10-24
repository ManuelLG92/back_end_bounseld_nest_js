import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { TJwt } from '../../util';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async setJwtCache(data: TJwt, token: string) {
    await this.cacheManager.set(`${data.email}-${data.ip}`, token, {
      ttl: 1200,
    });
  }
  async getJwtCache(data: TJwt): Promise<TJwt> {
    return await this.cacheManager.get(`${data.email}-${data.ip}`);
  }
}
