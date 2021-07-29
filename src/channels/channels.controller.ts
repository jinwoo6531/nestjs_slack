import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { ChannelsService } from './channels.service';

@ApiTags('WORKSPACE')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  // @Get(':name')
  // getSpecificChannel(@Param('name') name: string) {}

  // @Get(':name/chats')
  // getChats(@Query() query, @Param() param) {
  //   return this.channelsService.getWorkspaceChannelChats();
  // }

  @Get(':name/members')
  getAllMembers(@Param('url') url: string, @Param('name') name: string) {
    return this.channelsService.getWorkspaceChannelMembers(url, name);
  }
}
