import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma/prisma.service';

@Injectable()
export class FindUserService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findOneByEmail(email: string) {
    return await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
  }
}
