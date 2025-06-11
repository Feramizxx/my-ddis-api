// src/sales/sales.controller.ts
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('sales')
@UseGuards(JwtAuthGuard)
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Get('user/:uid')
  listSales(@Param('uid') uid: string) {
    return this.salesService.listSalesByUserId(uid);
  }

  @Get('purchases/:uid')
  listPurchases(@Param('uid') uid: string) {
    return this.salesService.listPurchasesByUserId(uid);
  }

  @Post('offer')
  createOffer(@Body() dto: CreateOfferDto, @CurrentUser() user: any) {
    return this.salesService.createOffer(dto, user.userId);
  }

  @Delete('offer/:id')
  deleteOffer(@Param('id') sale_id: string, @CurrentUser() user: any) {
    return this.salesService.deleteOwnOffer(sale_id, user.userId);
  }
}
