import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import EventConstants from '../../../shared/Domain/Constants/Events/EventConstants';
import { FindUserByIdQueryHandler } from '../../Application/UseCases';

@Controller()
export class FindUserByIdController {
  constructor(private readonly handler: FindUserByIdQueryHandler) {}

  @MessagePattern(EventConstants.messagePatterns.user.findById)
  async getLanguageByCode(@Payload() id: string, @Ctx() context: RmqContext) {
    console.log(`id: ${id}. Pattern: ${context.getPattern()})}`);

    const user = await this.handler.execute(id);
    // const language = await this.queryBus.execute(new GetLanguageQuery(id));
    //console.log(language);
    return user?.id?.value();
  }
}
