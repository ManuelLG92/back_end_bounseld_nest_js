import { Controller } from '@nestjs/common';
import { GlobalsService } from './globals.service';

@Controller('globals')
export class GlobalsController {
  constructor(private readonly globalsService: GlobalsService) {}
}
