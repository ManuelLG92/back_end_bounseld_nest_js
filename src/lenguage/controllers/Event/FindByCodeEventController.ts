import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import EventConstants from 'src/shared/Domain/Constants/Events/EventConstants';
import { GetLanguageQuery } from '../../Application';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Controller()
export class FindByCodeController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @MessagePattern(EventConstants.messagePatterns.language.findByCode)
  async getLanguageByCode(@Payload() code: string, @Ctx() context: RmqContext) {
    console.log(`Code: ${code}. Pattern: ${context.getPattern()})}`);
    const language = await this.queryBus.execute(new GetLanguageQuery(code));
    console.log(language);
    return language;
  }
}
