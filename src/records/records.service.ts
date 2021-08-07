import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { Record } from './entity/records.entity';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) {}

  async addNewConnection(socketId: string, userId: number) {
    const record = new Record();
    record.socketId = socketId;
    record.userId = userId;
    record.openAt = new Date();
    await this.recordRepository.save(record);
  }

  async closeConnection(socketId: string) {
    const currentConnection = await this.recordRepository.findOne({
      where: {
        socketId: socketId,
      },
    });
    if (!currentConnection) throw new NotFoundException('Connection not found');
    currentConnection.closedAt = new Date();
    await this.recordRepository.save(currentConnection);
  }

  async getConnectionsByUserId(userId: number) {
    return await this.recordRepository.find({
      where: {
        userId: userId,
      },
    });
  }

  async getAllConnections() {
    return await this.recordRepository.find();
  }

  async getConnectionsByUserIdAndDate(
    userId: number,
    from: string,
    to: string,
  ) {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    return await this.recordRepository.find({
      where: {
        userId: userId,
        openAt: MoreThanOrEqual(fromDate),
        closedAt: LessThanOrEqual(toDate),
      },
    });
  }
}
