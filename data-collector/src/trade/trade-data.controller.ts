import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { TradeDataService } from './trade-data.service';
import { TradeData } from './trade-data.entity';

@Controller()
export class TradeDataController {
  constructor(private readonly tradeDataService: TradeDataService) {}

  @Get()
  getAllTradeData(): Promise<TradeData[]> {
    return this.tradeDataService.findAll();
  }

  @Post('/update')
  @HttpCode(200)
  async insertTradeData(@Body() data: any) {
    const tradeData = new TradeData;
    tradeData.resources = data.resources;
    tradeData.timestamp = new Date();
    this.tradeDataService.insertTradeData(tradeData)
    return ({data: `New resource score of ${tradeData.resources} with timestamp ${tradeData.timestamp} inserted into database`})
  }
}