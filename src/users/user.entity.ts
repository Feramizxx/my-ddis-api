// src/users/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ default: 0 })
  sales: number;

  @Column({ default: 0 })
  sales_sum: number;

  @Column({ default: 0 })
  purchases: number;

  @Column({ default: 0 })
  purchases_sum: number;

  @Column({ default: 0 })
  balance: number;
}
