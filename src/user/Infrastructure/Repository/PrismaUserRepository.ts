import { AppRepositoryService } from '../../../shared/Infrastructure/Repository/AppRepositoryService';
import { CreateUserDto } from '../../dto/create-user.dto';
import { IRequestDetail } from '../../../util';
import { UserRepositoryPort } from '../../Application/UserRepositoryPort';
import { IUser, User } from '../../Domain/User';

abstract class PrismaUserRepository implements UserRepositoryPort {
  protected constructor(private appRepositoryService: AppRepositoryService) {}

  async save(createUserRestDto: CreateUserDto, reqDetails: IRequestDetail) {
    await this.appRepositoryService.user.upsert({
      create: { ...createUserRestDto, ...reqDetails },
      update: { ...createUserRestDto, ...reqDetails },
      where: { id: createUserRestDto.id },
      // data: { ...createUserRestDto, ...reqDetails },
    });
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
