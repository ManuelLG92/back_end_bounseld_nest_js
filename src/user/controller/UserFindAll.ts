import {  Controller, Get } from "@nestjs/common";
import { UserService } from "../user.service";

@Controller('user')
export class UserFindAll {
    constructor(
        private readonly userRestService: UserService,
      ) {}
      @Get()
      findAll() {
        console.log('enter');
        return this.userRestService.findAll();
      }
}