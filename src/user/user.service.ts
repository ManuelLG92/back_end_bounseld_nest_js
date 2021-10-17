import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { GlobalsService } from '../globals/globals.service';
import { IRequestDetail } from '../decorators';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private globalService: GlobalsService,
  ) {}

  async create(createUserRestDto: CreateUserDto, reqDetails: IRequestDetail) {
    /*    createUserRestDto.password = await this.globalService.setData(
      createUserRestDto.password,
    );*/
    return await this.prismaService.user.create({
      data: {
        ...createUserRestDto,
        password: await this.globalService.setData(createUserRestDto.password),
        isGoogleUser: false,
        ctx: reqDetails,
      },
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateUserRestDto: UpdateUserDto) {
    if (updateUserRestDto.password) {
      updateUserRestDto.password = await this.globalService.setData(
        updateUserRestDto.password,
      );
    }
    return await this.prismaService.user.update({
      where: {
        id: id,
      },
      data: {
        ...updateUserRestDto,
      },
    });
  }

  async remove(id: string) {
    return await this.prismaService.user.delete({
      where: {
        id: id,
      },
    });
  }
}
