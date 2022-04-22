import { LanguageRepositoryPort } from '../../Application';
import { ILanguage, Language } from '../../Domain/language';
import { PrismaService } from '../../../prisma/prisma.service';

export class PrismaLanguageRepository implements LanguageRepositoryPort {
  public constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<ILanguage[]> {
    const languages = await this.prismaService.languages.findMany();
    return languages.map((item) => Language.fromObject(item));
  }

  async findOne(code: string): Promise<ILanguage> {
    const language = await this.prismaService.languages.findFirst({
      where: { code },
    });

    return Language.fromObject(language);
  }
}
