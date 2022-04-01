import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/prisma.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { LearningLanguages, NativeLanguages } from '../dto/create-user.dto';
import { GlobalsService } from '../../globals/globals.service';

@Injectable()
export class UpdateUserService {
  constructor(
    private prismaService: PrismaService,
    private globalService: GlobalsService,
  ) {}

  async update(id: string, updateUserRestDto: UpdateUserDto) {
    if (updateUserRestDto.password) {
      updateUserRestDto.password = await this.globalService.encryptData(
        updateUserRestDto.password,
      );
    }

    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new UnauthorizedException('not found user');
    }

    await this.cleanUpUserLanguages(id);

    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserRestDto,
        nativeLanguages: {
          upsert: UpdateUserService.getItemsWithoutEmptyCodes(
            updateUserRestDto.nativeLanguages,
          ).map((data) => ({
            create: data,
            update: data,
            where: { id },
          })),
        },

        learningLanguages: {
          upsert: UpdateUserService.getItemsWithoutEmptyCodes(
            updateUserRestDto.learningLanguages,
          ).map((data) => ({
            create: data,
            update: data,
            where: { id },
          })),
        },
      },
    });
  }

  private async cleanUpUserLanguages(id: string) {
    await this.prismaService.nativeLanguages.deleteMany({
      where: {
        user: { some: { id } },
      },
    });
    await this.prismaService.learningLanguages.deleteMany({
      where: {
        user: { some: { id } },
      },
    });
  }

  private static getItemsWithoutEmptyCodes(
    collection: NativeLanguages[] | LearningLanguages[],
  ) {
    return collection.filter((item) => {
      if (item.code.length === 2) {
        return item;
      }
    });
  }
}
