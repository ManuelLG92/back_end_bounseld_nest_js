import { Inject, Injectable } from '@nestjs/common';
import { SocketConnection } from './interfaces';
import { QueueConstants } from 'src/shared/Infrastructure';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppGatewayService {
  constructor(
    @Inject(QueueConstants.GATEWAY_CLIENT)
    private readonly client: ClientProxy,
  ) {}

  async onModuleInit() {
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  private socketList = new Map();

  async setUserAndSocket(
    id: string,
    socket: string,
  ): Promise<SocketConnection[]> {
    this.socketList[id] = socket;

    this.socketList.set(socket, { id, socket, name: `name-${id}` });
    return this.socketList.get(id);
  }

  async getUsersList(): Promise<SocketConnection[] | []> {
    return [...this.socketList.values()] ?? [];
  }

  async getUsersListWithoutCurrent(
    socket: string,
  ): Promise<SocketConnection[] | []> {
    return [...this.socketList.values()].filter(
      (item) => item.socket !== socket,
    );
  }

  async removeUserFromList(socket: string): Promise<string | null> {
    const user = await this.getUser(socket);

    if (user && this.socketList.delete(socket)) {
      return user.id;
    }
    return null;
  }

  async getUser(socket: string): Promise<SocketConnection> {
    return this.socketList.get(socket);
  }
}
