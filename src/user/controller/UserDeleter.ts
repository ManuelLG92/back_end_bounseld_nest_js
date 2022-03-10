import { Body, Controller, Delete, Get, Param, Patch, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserService } from "../user.service";

@Controller('user')
export class UserDeleter {
  constructor(
    private readonly userRestService: UserService,
  ) { }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRestService.remove(id);
  }

}