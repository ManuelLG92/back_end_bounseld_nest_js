import { UserRepositoryPort } from '../../Application';
import { IUser, User } from '../../Domain/User';
import { PrismaService } from '../../../prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepositoryPort {
  public constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<IUser[]> {
    const users = await this.prismaService.user.findMany();

    return users?.map((user) => User.fromObject(user));
  }

  async findOne(id: string): Promise<IUser> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    return User.fromObject(user);
  }

  async findOneByEmail(email: string): Promise<IUser> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new BadRequestException('an user already exists with this email');
    }
    return User.fromObject(user);
  }

  async remove(id: string): Promise<void> {
    await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }

  async save(user: IUser): Promise<string | null> {
    /*    console.log(
      'enter on save prisma',
      // this.appRepositoryService.user.create({ data: user }),
      this.appRepositoryService.us,
    );*/
    console.log('after');
    const userObject = await this.prismaService.user.upsert({
      create: {
        ...user,
        languages: {
          connect: user.languages.map((item) => {
            return { code: item.code };
          }),
        },
        learningLanguages: {
          create: user.learningLanguages.map((item) => ({
            level: item.level,
            user: {
              connect: { id: user.id },
            },
            language: {
              connect: { code: item.code },
            },
          })),
        },
      },
      update: {
        ...user,
        languages: {
          // deleteMany: {},
          connect: user.languages.map((item) => {
            return { code: item.code };
          }),
        },
        learningLanguages: {
          deleteMany: {},
          create: user.learningLanguages.map((item) => ({
            level: item.level,
            language: {
              connect: { code: item.code },
            },
            user: {
              connect: { id: user.id },
            },
          })),
        },
      },
      where: { id: user.id },
    });
    console.log('after save', userObject);
    return User.fromObject(userObject)?.id;
  }
}
