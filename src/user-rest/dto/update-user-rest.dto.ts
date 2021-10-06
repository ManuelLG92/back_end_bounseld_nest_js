import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRestDto } from './create-user-rest.dto';

export class UpdateUserRestDto extends PartialType(CreateUserRestDto) {}
