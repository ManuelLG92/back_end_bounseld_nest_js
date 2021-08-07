import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Res,
} from '@nestjs/common';

import { RecordsService } from './records.service';
import { Response } from 'express';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get('/all')
  async getAll(@Res() res: Response) {
    const AllConnections = await this.recordsService.getAllConnections();
    return res.status(HttpStatus.OK).json(AllConnections);
  }

  @Get('/user/:id')
  async findRecordsByUserId(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const userConnections = await this.recordsService.getConnectionsByUserId(
      id,
    );
    return res.status(HttpStatus.OK).json(userConnections);
  }

  @Get('/user/:id/from/:from/to/:to')
  async findRecordsByUserIdAndDate(
    @Param('id', ParseIntPipe) id: number,
    @Param('from') from: string,
    @Param('to') to: string,
    @Res() res: Response,
  ) {
    const userConnectionsByDate =
      await this.recordsService.getConnectionsByUserIdAndDate(id, from, to);

    return res.status(HttpStatus.OK).json(userConnectionsByDate);
  }
}
