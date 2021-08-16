import { ReportService } from './report.service';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
export declare class ReportResolver {
    private readonly reportService;
    constructor(reportService: ReportService);
    createReport(createReportInput: CreateReportInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateReport(updateReportInput: UpdateReportInput): string;
    removeReport(id: number): string;
}
