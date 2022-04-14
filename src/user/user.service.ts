import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  CreateUserDto,
  LearningLanguages,
  NativeLanguages,
} from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { GlobalsService } from '../globals/globals.service';
import { IRequestDetail } from '../util';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserRestDto: CreateUserDto, reqDetails: IRequestDetail) {
    return await this.prismaService.user.create({
      data: {
        ...createUserRestDto,
        password: await GlobalsService.encryptData(createUserRestDto.password),
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

  async update(id: string, updateUserRestDto: UpdateUserDto) {
    if (updateUserRestDto.password) {
      updateUserRestDto.password = await GlobalsService.encryptData(
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
          upsert: UserService.getItemsWithoutEmptyCodes(
            updateUserRestDto.nativeLanguages,
          ).map((data) => ({
            create: data,
            update: data,
            where: { id },
          })),
        },

        learningLanguages: {
          upsert: UserService.getItemsWithoutEmptyCodes(
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

  async remove(id: string) {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
