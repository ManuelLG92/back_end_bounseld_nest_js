export enum QueueConstants {
  // URL = 'amqp://localhost:5672',
  URL = 'amqp://rabbitmq:5672',
  MAIN_QUEUE = 'module_communication',
  LANGUAGE_CLIENT = 'language_client_queue',
  NATIVE_LANGUAGE_CLIENT = 'native_language_client_queue',
  USER_CLIENT = 'user_client_queue',
  LEARNING_LANGUAGE_CLIENT = 'learning_language_client_queue',
}
