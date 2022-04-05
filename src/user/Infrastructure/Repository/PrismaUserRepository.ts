import { AppRepositoryService } from '../../../shared/Infrastructure/Repository/AppRepositoryService';
import { UserRepositoryPort } from '../../Domain/UserRepositoryPort';
import { IUser, User } from '../../Domain/User';
import { PrismaService } from '../../../prisma/prisma/prisma.service';

export class PrismaUserRepository
  extends AppRepositoryService
  implements UserRepositoryPort
{
  public constructor(private appRepositoryService: PrismaService) {
    super();
  }

  async save(user: IUser): Promise<string> {
    const userObject = this.appRepositoryService.user.upsert({
      create: { ...user },
      update: { ...user },
      where: { id: user.id },
    });

    return User.fromObject(userObject)?.id;
  }

  async findAll(): Promise<IUser[]> {
    const users = await this.appRepositoryService.user.findMany();

    return users?.map((user) => User.fromObject(user));
  }

  async findOne(id: string): Promise<IUser> {
    const user = await this.appRepositoryService.user.findUnique({
      where: {
        id,
      },
    });

    return User.fromObject(user);
  }

  async findOneByEmail(email: string): Promise<IUser> {
    const user = await this.appRepositoryService.user.findFirst({
      where: {
        email,
      },
    });
    return User.fromObject(user);
  }

  async remove(id: string): Promise<void> {
    await this.appRepositoryService.user.delete({
      where: {
        id,
      },
    });
  }
}
