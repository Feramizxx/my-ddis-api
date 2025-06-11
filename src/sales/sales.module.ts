// src/sales/sales.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './sales.entity';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { User } from '../users/user.entity';
import { Item } from 'src/items/item.entity';
import { ItemsModule } from 'src/items/items.module';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, User, Item]), ItemsModule],
  providers: [SalesService],
  controllers: [SalesController],
})
export class SalesModule {}
