import { Injectable } from '@nestjs/common';
import { CreateUserRestDto } from './dto/create-user-rest.dto';
import { UpdateUserRestDto } from './dto/update-user-rest.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
@Injectable()
export class UserRestService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserRestDto: CreateUserRestDto) {
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

  async update(id: string, updateUserRestDto: UpdateUserRestDto) {
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
