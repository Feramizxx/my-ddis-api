// src/items/item.entity.ts
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('items')
export class Item {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  item_id: string;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 100 })
  type: string;

  @Column({ length: 100 })
  category: string;

  @Column({ length: 100 })
  subcategory: string;

  @Column({ length: 100 })
  manufacturer: string;

  @Column({ type: 'text', nullable: true })
  manufacturer_description: string;

  @Column('int')
  release_year: number;

  @Column('decimal', { precision: 2, scale: 1, nullable: true })
  avg_rating: number;

  @Column('int', { nullable: true })
  ratings: number;

  @Column('int', { nullable: true })
  sales: number;
}
