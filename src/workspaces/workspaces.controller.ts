import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { Users } from './../entities/Users';
import { User } from './../common/decorators/user.decorator';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('WORKSPACE')
@Controller('api/workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  getMyWorkspaces(@User() user: Users) {
    return this.workspacesService.findMyWorkspaces(user.id);
  }

  @Post()
  createWorkspace(@User() user: Users, @Body() body: CreateWorkspaceDto) {
    return this.workspacesService.createWorkspace(
      body.workspace,
      body.url,
      user.id,
    );
  }
}
