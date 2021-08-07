import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async createFixturesUsers() {
    for (let i = 0; i < 10; i++) {
      const user = new User();
      user.name = 'User ' + String(i + 1);
      await this.UserRepository.save(user);
    }
  }

  async getAllUsers() {
    return await this.UserRepository.find();
  }

  async getUser(userId: number) {
    return await this.UserRepository.findOneOrFail(userId);
  }
}
