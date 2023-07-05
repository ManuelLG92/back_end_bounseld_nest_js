import { ExceptionTypes } from './ExceptionTypes';

export interface SerializedException {
  name: string;
  message: string;
  stack?: string;
  metadata?: { [key: string]: unknown };
}

export abstract class ExceptionBase extends Error {
  protected constructor(
    readonly message: string,
    readonly metadata?: { [key: string]: unknown },
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }

  abstract name: ExceptionTypes;

  toJSON(): SerializedException {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      metadata: this.metadata,
    };
  }
}
