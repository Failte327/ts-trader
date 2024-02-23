import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { PriceDataService } from './price-data.service';
import { PriceData } from './price-data.entity';

@Controller()
export class PriceDataController {
  constructor(private readonly priceDataService: PriceDataService) {}

  @Get()
  getAllPriceData(): Promise<PriceData[]> {
    return this.priceDataService.findAll();
  }

  @Post('/update')
  @HttpCode(200)
  async insertPriceData() {
    const symbols = ['ADXUSDT', 'GLMUSD', 'CLVUSD', 'SANDUSD', 'OCEANUSD']
    for (var symbol in symbols) {
      const response = await fetch(`https://api.binance.us/api/v3/ticker/price?symbol=${symbols[symbol]}`)
      const data = await response.json();
      const priceData = new PriceData;
      priceData.symbol = data["symbol"];
      priceData.price = data["price"];
      priceData.timestamp = new Date();
      this.priceDataService.insertPriceData(priceData);
      console.log(`Inserting symbol, price, and timestamp data into for symbol ${data["symbol"]} the database.`);
    }
    return ({data: `Gathering data on symbols ${symbols} from Binance API`})
  }
}