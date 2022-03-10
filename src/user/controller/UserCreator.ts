import { BadRequestException, Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RequestDetails } from "src/decorators";
import { IRequestDetail } from "src/util";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserService } from "../user.service";

@Controller('user')
export class UserCreator {
  constructor(
    private readonly userRestService: UserService,
  ) { }
  @Post()
  async create(
    @Body() createUserRestDto: CreateUserDto,
    @RequestDetails() ctx?: IRequestDetail,
  ) {
    if (await this.userRestService.findOneByEmail(createUserRestDto.email)) {
      throw new BadRequestException(
        `User ${createUserRestDto.email} already registered.`,
      );
    }
    console.log('enter');
    const user = await this.userRestService.create(createUserRestDto, ctx);
    return JSON.stringify({ id: user.id });
  }

}