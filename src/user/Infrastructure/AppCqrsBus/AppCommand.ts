import { ICommand } from '@nestjs/cqrs';
import { AppCommandHandler } from './AppCommandHandler';

export abstract class AppCommand implements ICommand {
  public static readonly _commandHandler: AppCommandHandler = null;
  private _commandHandler: AppCommandHandler;

  protected constructor(commandHandler: AppCommandHandler) {
    this._commandHandler = commandHandler;
  }
}
