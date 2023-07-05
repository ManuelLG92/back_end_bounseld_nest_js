import { Injectable } from '@nestjs/common';
import { SocketConnection } from './interfaces';

@Injectable()
export class AppGatewayService {
  private readonly socketList = new Map();

  async setUserAndSocket(
    id: string,
    socket: string,
  ): Promise<SocketConnection[]> {
    this.socketList.set(id, { id, socket, name: `name-${id}` });
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

  buildChatChannelId({ from, to }: { from: string; to: string }): string {
    return `${from}-${to}-${from}`;
  }
}
