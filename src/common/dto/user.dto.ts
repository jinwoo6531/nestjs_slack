import { CreateUserDto } from './../../users/dto/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto extends CreateUserDto {
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디',
  })
  id: number;
}
