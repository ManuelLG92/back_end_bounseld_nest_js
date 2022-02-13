import { Injectable } from '@nestjs/common';
import { SocketConnection } from './interfaces';

@Injectable()
export class AppGatewayService {
  private socketList: Array<SocketConnection>;

  
  async setUserAndSocket(
    user: string,
    socket: string,
  ): Promise<SocketConnection[]> {
    !this.socketList
      ? (this.socketList = [{ id: user, socket: socket }])
      : this.socketList.push({ id: user, socket: socket });
    return this.socketList;
  }

  async getUsersList(): Promise<SocketConnection[] | []> {
    return this.socketList ?? [];
  }

  async removeUserFromList(socket: string): Promise<string> {
    const user = await this.getUser(socket);
    this.socketList = this.socketList?.filter((el) => el.socket !== socket);
    return user?.id;
  }

  async getUser(socket: string): Promise<SocketConnection> {
    return this.socketList?.find((el) => (el.socket = socket));
  }
  /*constructor(private readonly redisService: RedisService) {}

  private test = this.redisService.getClient('test');

  async root(): Promise<any> {
    const client = this.redisService.getClient('test');
    await client.lpush('test', 'test args');
    return true;
  }*/
}
