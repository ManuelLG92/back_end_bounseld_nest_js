import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const users = await this.usersService.getAllUsers();
    return res.status(HttpStatus.OK).json(users);
  }
}
