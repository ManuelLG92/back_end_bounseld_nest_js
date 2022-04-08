import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { AppCommand } from './AppCommand';

@CommandHandler(AppCommand._commandHandler)
export abstract class AppCommandHandler implements ICommandHandler {
  abstract execute<T>(command: AppCommandHandler): Promise<T>;
}
