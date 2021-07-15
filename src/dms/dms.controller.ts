import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { DmsService } from './dms.service';
import { CreateDmDto } from './dto/create-dm.dto';
import { UpdateDmDto } from './dto/update-dm.dto';
import { ApiQuery, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  constructor(private readonly dmsService: DmsService) {}

  // @Post()
  // create(@Body() createDmDto: CreateDmDto) {
  //   return this.dmsService.create(createDmDto);
  // }

  @ApiParam({
    name: 'url',
    required: true,
    description: '워크스페이스 url',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 아이디',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
  })
  @Get(':id/chats')
  getChat(@Query('perPage') perPage, @Query('page') page) {
    console.log(perPage, page);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDmDto: UpdateDmDto) {
  //   return this.dmsService.update(+id, updateDmDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dmsService.remove(+id);
  // }
}
