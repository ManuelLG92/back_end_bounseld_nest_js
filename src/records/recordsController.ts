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
  getAll(@Res() res: Response) {
    //return this.recordsService.records;

    return res
      .status(HttpStatus.OK)
      .json(this.recordsService.getAllConnections());
  }

  @Get('/user/:id')
  findRecordsByUserId(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const userConnections = this.recordsService.getConnectionsByUserId(id);
    console.log(userConnections);
    return res.status(HttpStatus.OK).json(userConnections);
  }
}
