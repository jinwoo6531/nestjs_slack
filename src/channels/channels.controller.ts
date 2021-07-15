import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';

@ApiTags('WORKSPACE')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  // @Get()
  // getAllChannels() {}

  // @Post()
  // createChannel() {}

  // @Get(':name')
  // getSpecificChannel() {}

  // @Get(':name/chats')
  // getChats(@Query() query, @Param() param) {}

  // @Post(':name/chats')
  // postChat(@Body() body) {}

  // @Get(':name/members')
  // getAllMembers() {}

  // @Post(':name/members')
  // inviteMembers() {}
}
