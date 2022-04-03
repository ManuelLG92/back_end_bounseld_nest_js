import { Inject, Injectable } from '@nestjs/common';
import { IRequestDetail } from '../../../../util';
import { CreateUserDto } from '../../../dto/create-user.dto';
import { UserRepositoryPort } from '../../UserRepositoryPort';
import { UserProviders } from '../../../constants/repository';

@Injectable()
export class userSaver {
  constructor(
    @Inject(UserProviders.USER_REPOSITORY)
    private userRepositoryPort: UserRepositoryPort,
  ) {}

  async create(createUserRestDto: CreateUserDto, reqDetails: IRequestDetail) {
    return this.userRepositoryPort.save({
      ...createUserRestDto,
      ctx: reqDetails,
    });
    // return await this.prismaService.user.create({
    //   data: {
    //     ...createUserRestDto,
    //     password: await this.globalService.encryptData(
    //       createUserRestDto.password,
    //     ),
    //     isGoogleUser: false,
    //     ctx: reqDetails,
    //   },
    // });
  }
}
