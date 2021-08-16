import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
export declare class ReportService {
    create(createReportInput: CreateReportInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReportInput: UpdateReportInput): string;
    remove(id: number): string;
}
