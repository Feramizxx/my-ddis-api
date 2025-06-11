// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.usersRepo.findOne({ where: { email } });
    return user === null ? undefined : user;
  }

  async findById(id: number): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersRepo.findOne({ where: { id } as any});
    if (!user) return null;
    const { password, ...rest } = user;
    return rest;
  }
}
