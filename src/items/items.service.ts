// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepo: Repository<Item>,
  ) {}

  async findById(id: string) {
    return this.itemsRepo.findOne({ where: { item_id: id } });
  }

  async updateSalesCount(id: string, incrementBy = 1) {
    const item = await this.findById(id);
    if (!item) return null;

    item.sales = (item.sales || 0) + incrementBy;
    return this.itemsRepo.save(item);
  }

  async findMany(limit = 100, offset = 0) {
  return this.itemsRepo.find({
    skip: offset,
    take: limit,
    order: { title: 'ASC' },
  });
}
}
