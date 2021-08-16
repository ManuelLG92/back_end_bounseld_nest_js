import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportResolver } from './report.resolver';
import { PrismaModule } from 'src/prisma/prisma/prisma.module';


@Module({
  imports: [
    PrismaModule
  ],
  providers: [ReportResolver, ReportService]
})
export class ReportModule {}
