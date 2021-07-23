import { Users } from './../entities/Users';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}
