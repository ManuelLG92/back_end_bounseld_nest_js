import { Injectable } from '@nestjs/common';

import { Record } from './entity/records.entity';
@Injectable()
export class RecordsService {
  records = Array<Record>();

  addNewConnection(socketId: string, userId: number) {
    const record = new Record();
    record.socketId = socketId;
    record.userId = userId;
    record.openAt = new Date();
    console.log(record, this.records);
    this.records.push(record);
  }

  closeConnection(socketId: string) {
    const recordConnection = this.records.find(
      (record) => record.socketId == socketId,
    );
    recordConnection.closedAt = new Date();
    console.log(recordConnection, this.records);
  }

  getConnectionsByUserId(userId: number) {
    console.log(this.records);
    return this.records.filter((record) => record.userId == userId);
  }

  getAllConnections() {
    console.log(this.records);
    return this.records;
  }
}
