import { RecordsService } from './records.service';
import { Response } from 'express';
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    getAll(res: Response): Promise<Response<any, Record<string, any>>>;
    findRecordsByUserId(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findRecordsByUserIdAndDate(id: number, from: string, to: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
