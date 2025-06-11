// src/sales/sale.entity.ts
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Item } from 'src/items/item.entity';

@Entity('sales')
export class Sale {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  sale_id: string;

  @ManyToOne(() => User, user => user.uid, { eager: true })
  @JoinColumn({ name: 'seller_uid' })
  seller: User;

  @ManyToOne(() => User, user => user.uid, { eager: true, nullable: true })
  @JoinColumn({ name: 'buyer_uid' })
  buyer: User;

  @ManyToOne(() => Item, item => item.item_id, { eager: true })
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @Column({ default: 1 })
  quantity: number;

  @Column('decimal', { precision: 7, scale: 2 })
  price_per_item: number;

  @Column('decimal', { precision: 7, scale: 2 })
  price_total: number;

  @Column()
  state: string;

  @Column({ type: 'text', nullable: true })
  seller_description: string;

  @Column({ type: 'timestamp', nullable: true })
  date_offered: Date;

  @Column({ type: 'timestamp', nullable: true })
  date_sold: Date;

  @Column({ nullable: true })
  batch: number;
}
