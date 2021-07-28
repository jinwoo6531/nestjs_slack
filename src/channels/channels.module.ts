import { Users } from './../entities/Users';
import { ChannelChats } from './../entities/ChannelChats';
import { ChannelMembers } from './../entities/ChannelMembers';
import { Channels } from './../entities/Channels';
import { Module } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Channels, ChannelMembers, ChannelChats, Users]),
  ],
  controllers: [ChannelsController],
  providers: [ChannelsService],
})
export class ChannelsModule {}
