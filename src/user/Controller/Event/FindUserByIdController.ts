import { Controller } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import EventConstants from '../../../shared/Domain/Constants/Events/EventConstants';
import { FindUserByIdQuery } from '../../Application';

@Controller()
export class FindUserByIdController {
  constructor(private readonly queryBus: QueryBus) {}

  @MessagePattern(EventConstants.messagePatterns.user.findById)
  async getLanguageByCode(@Payload() id: string, @Ctx() context: RmqContext) {
    console.log(`id: ${id}. Pattern: ${context.getPattern()})}`);

    const user = await this.queryBus.execute(new FindUserByIdQuery(id));
    // const language = await this.queryBus.execute(new GetLanguageQuery(id));
    //console.log(language);
    return user?.id?.value();
  }
}
