import { ICommand } from '@nestjs/cqrs';

export abstract class AppCommand implements ICommand {}
