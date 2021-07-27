import { ChannelMembers } from './../entities/ChannelMembers';
import { WorkspaceMembers } from './../entities/WorkspaceMembers';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, WorkspaceMembers, ChannelMembers]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
