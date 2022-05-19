import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import EventConstants from 'src/shared/Domain/Constants/Events/EventConstants';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetManyLanguagesQuery } from '../../Application/UseCases/GetMany';

@Controller()
export class FindManyByCodeCollectionEventController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @MessagePattern(EventConstants.messagePatterns.language.findCollectionByCodes)
  async getLanguageByCode(
    @Payload() codes: Array<string>,
    @Ctx() context: RmqContext,
  ) {
    console.log(`Code: ${codes}. Pattern: ${context.getPattern()})}`);
    const languages = await this.queryBus.execute(
      new GetManyLanguagesQuery(codes),
    );
    console.log(languages);
    return languages;
  }
}
