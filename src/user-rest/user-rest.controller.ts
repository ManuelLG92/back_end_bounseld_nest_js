import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRestService } from './user-rest.service';
import { CreateUserRestDto } from './dto/create-user-rest.dto';
import { UpdateUserRestDto } from './dto/update-user-rest.dto';

@Controller('user-rest')
export class UserRestController {
  constructor(private readonly userRestService: UserRestService) {}

  @Post()
  create(@Body() createUserRestDto: CreateUserRestDto) {
    return this.userRestService.create(createUserRestDto);
  }

  @Get()
  findAll() {
    return this.userRestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRestService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserRestDto: UpdateUserRestDto,
  ) {
    return this.userRestService.update(id, updateUserRestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRestService.remove(id);
  }
}
