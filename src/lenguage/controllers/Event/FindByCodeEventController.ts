import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import EventConstants from 'src/shared/Domain/Constants/Events/EventConstants';
import { GetLanguageQuery } from '../../Application';
import { AppCommandBus, AppQueryBus } from 'src/shared/Application/Adapters';

@Controller()
export class FindByCodeController {
  constructor(
    private readonly commandBus: AppCommandBus,
    private readonly queryBus: AppQueryBus,
  ) {}

  @MessagePattern(EventConstants.messagePatterns.language.findByCode)
  async getLanguageByCode(@Payload() code: string, @Ctx() context: RmqContext) {
    console.log(`Code: ${code}. Pattern: ${context.getPattern()})}`);
    const language = await this.queryBus.execute(new GetLanguageQuery(code));
    console.log(language);
    return language;
  }
}
