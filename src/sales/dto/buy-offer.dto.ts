// src/sales/dto/buy-offer.dto.ts
import { IsString } from 'class-validator';

export class BuyOfferDto {
  @IsString()
  sale_id: string;
}
