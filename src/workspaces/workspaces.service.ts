import { Users } from './../entities/Users';
import { ChannelMembers } from './../entities/ChannelMembers';
import { WorkspaceMembers } from './../entities/WorkspaceMembers';
import { Channels } from './../entities/Channels';
import { Workspaces } from './../entities/Workspaces';
import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspaces)
    private workspacesRepository: Repository<Workspaces>,
    @InjectRepository(Channels)
    private channelsRepository: Repository<Channels>,
    @InjectRepository(WorkspaceMembers)
    private workspaceMembersRepository: Repository<WorkspaceMembers>,
    @InjectRepository(ChannelMembers)
    private channelMembersRepository: Repository<ChannelMembers>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  async findById(id: number) {
    return this.workspacesRepository.findByIds([id]);
  }

  async findMyWorkspaces(myId: number) {
    return this.workspacesRepository.find({
      where: {
        WorkspaceMembers: [{ UserId: myId }],
      },
    });
  }

  async createWorkspace(name: string, url: string, myId: number) {
    const runner = this.connection.createQueryRunner();
    await runner.connect();
    await runner.startTransaction();

    try {
      const workspace = await this.workspacesRepository.create({
        name,
        url,
        OwnerId: myId,
      });
      await runner.manager.save(workspace);

      const workspaceMember = await this.workspaceMembersRepository.create({
        UserId: myId,
        WorkspaceId: workspace.id,
      });
      await runner.manager.save(workspaceMember);

      const channel = await this.channelsRepository.create({
        name: '일반',
        WorkspaceId: workspace.id,
      });
      await runner.manager.save(channel);

      const channelMember = await this.channelMembersRepository.create({
        UserId: myId,
        ChannelId: channel.id,
      });
      await runner.manager.save(channelMember);
    } catch (error) {
      runner.rollbackTransaction();
    } finally {
      runner.release();
    }
  }

  async getWorkspaceMembers(url: string) {
    //user는 entity의 alias
    this.usersRepository
      .createQueryBuilder('user')
      .innerJoin('user.WorkspaceMembers', 'members')
      .innerJoin('members.Workspace', 'w', 'w.url = :url', { url })
      .getMany();
  }
}
