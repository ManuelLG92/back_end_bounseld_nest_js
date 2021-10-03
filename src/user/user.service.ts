import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.user.findMany({
      include: {
        country: true,
        learningLanguages: {
          include: {
            language: true,
          },
        },
        nativeLanguages: {
          include: {
            language: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.user.findUnique({
      where: { id },
      include: {
        country: true,
        learningLanguages: {
          include: {
            language: true,
          },
        },
        nativeLanguages: {
          include: {
            language: true,
          },
        },
      },
    });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    let user = await this.prismaService.user.findUnique({
      where: { id },
    });
    // console.log(user);
    if (!user) throw NotFoundException;

    const userPrisma: Prisma.UserUpdateInput = {};

    Object.assign(userPrisma, updateUserInput);

    user = await this.prismaService.user.update({
      where: { id },
      data: userPrisma,
    });
    return user;
  }

  async create(createUserInput: CreateUserInput) {
    let userData: Prisma.UserCreateInput | null = null;
    userData = {
      name: createUserInput.name,
      surname: createUserInput.surname,
      email: createUserInput.email,
      password: createUserInput.password,
      gender: createUserInput.gender,
      age: createUserInput.age,
      country: {
        connect: {
          id: createUserInput.countryId,
        },
      },
      description: '',
    };

    return await this.prismaService.user.create({
      data: userData,
    });
  }

  async remove(id: number) {
    try {
      await this.prismaService.nativeLanguage.deleteMany({
        where: { userId: id },
      });

      await this.prismaService.learningLanguage.deleteMany({
        where: { userId: id },
      });

      await this.prismaService.report.deleteMany({
        where: { userId: id },
      });
      await this.prismaService.user.delete({
        where: { id: id },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
