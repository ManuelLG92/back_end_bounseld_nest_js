import { UserRepositoryPort } from '../../Application';
import { User } from '../../Domain/User';
import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ICreateUserPrimitives } from '../../Domain/Interfaces';
import { IUser } from '../../Domain/Interfaces';

@Injectable()
export class PrismaUserRepository implements UserRepositoryPort {
  public constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<IUser[]> {
    const users = await this.prismaService.user.findMany();

    return users
      ?.map((user) => ({ ...user, password: null }))
      .map((userModified) => User.fromObject(userModified));
  }

  async findOne(id: string): Promise<IUser> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    user.password = '';

    return User.fromObject(user);
  }

  async findOneByEmail(email: string): Promise<IUser | null> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
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

  async save(user: ICreateUserPrimitives): Promise<string | null> {
    const userObject = await this.prismaService.user.upsert({
      create: {
        ...user,
        languages: {
          connect: user.languages?.map((item) => {
            return { code: item.code };
          }),
        },
        learningLanguages: {
          create: user.learningLanguages?.map((item) => ({
            level: item.level,
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
          connect: user.languages?.map((item) => {
            return { code: item.code };
          }),
        },
        learningLanguages: {
          deleteMany: {},
          create: user.learningLanguages?.map((item) => ({
            level: item.level,
            language: {
              connect: { code: item.code },
            },
          })),
        },
      },
      where: { id: user.id },
    });
    return User.fromObject(userObject)?.id.value();
  }
}
