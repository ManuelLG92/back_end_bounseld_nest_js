import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../prisma/prisma/prisma.service';
import {
  Prisma
} from '@prisma/client';
import { Language } from 'src/language/entities/language.entity';
import { throwHttpGraphQLError } from 'apollo-server-core/dist/runHttpQuery';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}


 async  create(createUserInput: CreateUserInput) {
   console.log(createUserInput)
    let userData : Prisma.UserCreateInput;

    userData = {
      name: createUserInput.name,
      surname: createUserInput.surname,
      email: createUserInput.email,
      password: createUserInput.password,
      gender: createUserInput.gender,
      age: createUserInput.age,
      country: {
        connect: {
          id: createUserInput.countryId
        }
      },
      description: ""
    }

    const userCreated = await this.prismaService.user.create({
     data: userData
    })

     return userCreated;
  }

  async findAll() {
     return await this.prismaService.user.findMany({
      include: {
        country: true,
        learningLanguages: {
          include: {
            language: true
          }
        },
        nativeLanguages: {
          include: {
            language: true
          }
        },
      }
     });
  }

  async findOne(id: number) {
    return await this.prismaService.user.findUnique({
      where: {id},
      include: {
        country: true,
        learningLanguages: {
          include: {
            language: true
          }
        },
        nativeLanguages: {
          include: {
            language: true
          }
        },
      }
    })
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    
    let user = await this.prismaService.user.findUnique({
      where: {id}
    })
    console.log(user)
    if(!user)  throw NotFoundException;
    
    let userPrisma: Prisma.UserUpdateInput = {}

    Object.assign(userPrisma, updateUserInput)

    user = await this.prismaService.user.update({
      where: {id},
      data: userPrisma
    })
    return user;
  }


  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
