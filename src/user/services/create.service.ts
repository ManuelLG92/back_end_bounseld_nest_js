import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/prisma.service';
import { GlobalsService } from '../../globals/globals.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { IRequestDetail } from '../../util';

@Injectable()
export class CreateService {
  constructor(
    private prismaService: PrismaService,
    private globalService: GlobalsService,
  ) {}

  async create(createUserRestDto: CreateUserDto, reqDetails: IRequestDetail) {
    return await this.prismaService.user.create({
      data: {
        ...createUserRestDto,
        password: await this.globalService.encryptData(
          createUserRestDto.password,
        ),
        isGoogleUser: false,
        ctx: reqDetails,
      },
    });
  }
}
