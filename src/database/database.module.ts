// src/database/database.module.ts
import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Sale } from 'src/sales/sales.entity';
import { Item } from 'src/items/item.entity';

@Injectable()
export class DatabaseModule implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: process.env.DB_HOST || '127.0.0.1',
      port: Number(process.env.DB_PORT) || 4000,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'the_shop',
      entities: [User, Sale, Item],
      synchronize: false, // Set to false in production!
      retryAttempts: 3,
      retryDelay: 3000,
    };
  }
}
