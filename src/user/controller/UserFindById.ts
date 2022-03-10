import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "../user.service";

@Controller('user')
export class UserFindById {
    constructor(
        private readonly userRestService: UserService,
      ) {}
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.userRestService.findOne(id);
      }
}