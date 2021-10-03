import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

//import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Resolver(() => User)
export class UserResolver {
  //private kafkaProducer: Producer;

  constructor(
    /* @Inject('KAFKA_BROKER')
    private clientKafka: ClientKafka,
*/
    private readonly userService: UserService,
  ) {}

  /* async onModuleInit() {
    this.kafkaProducer = await this.clientKafka.connect();
    this.clientKafka.subscribeToResponseOf('email_confirmation_received');
  }*/

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    /*    if (user) {
      await this.kafkaProducer.send({
        topic: 'send_email',
        messages: [
          {
            key: Math.random() + '',
            value: JSON.stringify({ userId: user.id, email: user.email }),
          },
        ],
      });
      console.log('Se envia user.resolver send_mail');
    }*/
    return await this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUser') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => Boolean)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }

  /*
  @MessagePattern('email_confirmation_received')
  sendEmail(@Payload() message) {
    message = message.value;
    console.log('Se recibe user.resolver email_confirmation_received');
    console.log(message);
    return {
      reply: 'ok',
    };
  }*/
}
