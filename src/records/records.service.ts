import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { Record } from './entity/records.entity';

@Injectable()
export class RecordsService {
  private logger: Logger = new Logger();
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
    this.logger.log(`string from: ${from} - string to: ${to}`);
    const fromDate = new Date(from);
    const toDate = new Date(to);
    this.logger.log(`Date from: ${fromDate} - Date to: ${toDate}`);

    const dateToFormatted = this.getDateTimeFormatted(toDate);
    const dateFromFormatted = this.getDateTimeFormatted(fromDate);

    console.log(dateToFormatted, dateFromFormatted);

    this.logger.log(
      `Date from formatted: ${dateFromFormatted} - Date formatted to: ${dateToFormatted}`,
    );

    return await this.recordRepository.find({
      where: {
        userId: userId,
        openAt: MoreThanOrEqual(dateFromFormatted),
        closedAt: LessThanOrEqual(dateToFormatted),
      },
    });
  }

  getDateTimeFormatted(date: Date): Date {
    const dateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDay(),
      date.getHours(),
      date.getMinutes(),
      date.getMilliseconds(),
    );
    console.log(dateTime);
    return dateTime;
  }
}
