import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/prisma.service';

@Injectable()
export class DeleteService {
  constructor(private prismaService: PrismaService) {}

  async remove(id: string) {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
