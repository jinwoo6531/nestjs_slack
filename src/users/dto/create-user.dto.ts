import { Users } from './../../entities/Users';
import { PickType } from '@nestjs/swagger';

export class CreateUserDto extends PickType(Users, [
  'email',
  'nickname',
  'password',
] as const) {}
