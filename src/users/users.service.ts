import { ChannelMembers } from './../entities/ChannelMembers';
import { WorkspaceMembers } from './../entities/WorkspaceMembers';
import { Users } from './../entities/Users';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository, Connection } from 'typeorm';
import bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectRepository(WorkspaceMembers)
    private workspaceMembersRepository: Repository<WorkspaceMembers>,
    @InjectRepository(ChannelMembers)
    private channelMembersRepository: Repository<ChannelMembers>,
    @InjectConnection()
    private connection: Connection,
  ) {}

  async join(createUserDto: CreateUserDto) {
    const runner = this.connection.createQueryRunner();
    await runner.connect();
    await runner.startTransaction();

    try {
      const { email, password, nickname } = createUserDto;
      const user = await this.usersRepository.findOne({ where: { email } });

      if (user) {
        throw new UnauthorizedException('이미 존재하는 사용자입니다.');
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const returned = await this.usersRepository.create({
        email,
        nickname,
        password: hashedPassword,
      });
      await runner.manager.save(returned);

      const workspaceMembers = await this.workspaceMembersRepository.create({
        UserId: returned.id,
        WorkspaceId: 1,
      });

      await runner.manager.save(workspaceMembers);

      const channelMember = await this.channelMembersRepository.create({
        UserId: returned.id,
        ChannelId: 1,
      });

      await runner.manager.save(channelMember);

      await runner.commitTransaction();
      return true;
    } catch (error) {
      await runner.rollbackTransaction();
      console.log(error);
      throw error;
    } finally {
      //꼭 연결끊기
      await runner.release();
    }
  }
}
