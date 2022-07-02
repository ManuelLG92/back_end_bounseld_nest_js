import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { TJwt } from '../../shared/Util';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async setJwtCache(data: TJwt, token: string) {
    await this.setCacheItem(`${data.email}-${data.ip}`, token);
    /*await this.cacheManager.set(`${data.email}-${data.ip}`, token, {
      ttl: 1200,
    });*/
  }
  async getJwtCache(data: TJwt): Promise<TJwt | null> {
    return (
      ((await this.getCacheItem(`${data.email}-${data.ip}`)) as TJwt) ?? null
    );
  }

  async setCacheItem(key: string, value: string, ttl = 1200) {
    await this.cacheManager.set(key, value, {
      ttl,
    });
  }
  async getCacheItem(key: string) {
    return (await this.cacheManager.get(key)) ?? null;
  }
}
