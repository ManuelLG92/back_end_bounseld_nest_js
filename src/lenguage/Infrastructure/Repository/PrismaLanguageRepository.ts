import { LanguageRepositoryPort } from '../../Application';
import { Language } from '../../Domain/language';
import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaLanguageRepository implements LanguageRepositoryPort {
  public constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Language[]> {
    const languages = await this.prismaService.languages.findMany();
    return languages.map((item) => Language.fromObject(item));
  }

  async findOne(code: string): Promise<Language> {
    const language = await this.prismaService.languages.findFirst({
      where: { code },
    });

    return Language.fromObject(language);
  }

  async findManyByCodes(codes: Array<string>): Promise<Language[]> {
    return await this.prismaService.languages.findMany({
      where: {
        code: {
          in: codes,
        },
      },
    });
  }
}
