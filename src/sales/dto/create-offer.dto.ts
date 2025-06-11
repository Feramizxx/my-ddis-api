// src/sales/dto/create-offer.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  item_id: string;

  @IsNumber()
  price_per_item: number;

  @IsNumber()
  quantity: number;

  @IsString()
  seller_description: string;
}
