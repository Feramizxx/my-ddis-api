// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { SalesModule } from './sales/sales.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseModule,
    }),
    AuthModule,
    UsersModule,
    SalesModule,
    ItemsModule,
  ],
})
export class AppModule {}
