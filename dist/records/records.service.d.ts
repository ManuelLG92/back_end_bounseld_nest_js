import { Repository } from 'typeorm';
import { Record } from './entity/records.entity';
export declare class RecordsService {
    private readonly recordRepository;
    private logger;
    constructor(recordRepository: Repository<Record>);
    addNewConnection(socketId: string, userId: number): Promise<void>;
    closeConnection(socketId: string): Promise<void>;
    getConnectionsByUserId(userId: number): Promise<Record[]>;
    getAllConnections(): Promise<Record[]>;
    getConnectionsByUserIdAndDate(userId: number, from: string, to: string): Promise<Record[]>;
    getDateTimeFormatted(date: Date): Date;
}
