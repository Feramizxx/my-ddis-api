// src/sales/sales.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Sale } from "./sales.entity";
import { Repository } from "typeorm";
import { CreateOfferDto } from "./dto/create-offer.dto";

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private salesRepo: Repository<Sale>,
  ) {}

async listSalesByUserId(uid: string) {
  return this.salesRepo.find({
    where: {
      seller: { uid } as any, // cast to any to suppress type check
    },
    order: { date_offered: 'DESC' },
  });
}


  async listPurchasesByUserId(uid: string) {
    return this.salesRepo.find({
      where: { buyer: { uid } as any },
      order: { date_sold: "DESC" },
    });
  }

  async createOffer(dto: CreateOfferDto, seller_uid: string) {
    const total = dto.quantity * dto.price_per_item;

const sale = this.salesRepo.create({
  sale_id: `S-${Date.now()}`,
  item: { item_id: dto.item_id } as any,
  seller: { uid: seller_uid } as any,
  price_per_item: dto.price_per_item,
  price_total: total,
  quantity: dto.quantity,
  state: 'open',
  seller_description: dto.seller_description,
  date_offered: new Date(),
  buyer: null,
  date_sold: null,
} as any);


    return this.salesRepo.save(sale);
  }

  async deleteOwnOffer(sale_id: string, user_id: string) {
    const sale = await this.salesRepo.findOne({ where: { sale_id } });
    if (!sale || String(sale.seller.uid) !== user_id) return null;
    return this.salesRepo.remove(sale);
  }
}
