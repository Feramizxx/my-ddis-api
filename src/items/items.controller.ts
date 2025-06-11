// src/items/items.controller.ts
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('items')
@UseGuards(JwtAuthGuard)
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get(':id')
  async getItemById(@Param('id') itemId: string) {
    return this.itemsService.findById(itemId);
  }

  @Get()
  async listItems(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
  ) {
    return this.itemsService.findMany(limit, offset);
  }
}
