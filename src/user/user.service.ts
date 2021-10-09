import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserRestDto: CreateUserDto) {
    return await this.prismaService.user.create({
      data: {
        ...createUserRestDto,
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
