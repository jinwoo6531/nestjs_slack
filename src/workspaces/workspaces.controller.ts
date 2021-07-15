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
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WORKSPACE')
@Controller('api/workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  // @Get()
  // getMyWorkspaces() {}

  // @Get(':url/members')
  // getAllMembersFromWorkspace() {}

  // @Post()
  // createWorkspace() {}

  // @Get(':url/members')
  // getAllMembersFromWorkspace() {}

  // @Post(':url/members')
  // inviteMemversToWorkspace() {}

  // @Delete(':url/members/:id')
  // kickMemberFromWorkspace() {}

  // @Get(':url/members/:id')
  // getMemberInfoInWorkSpace() {}
}
