
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceData } from './price-data.entity';

@Injectable()
export class PriceDataService {
  constructor(
    @InjectRepository(PriceData)
    private priceDataRepository: Repository<PriceData>,
  ) {}

  findAll(): Promise<PriceData[]> {
    return this.priceDataRepository.find();
  }

  findOne(symbol: string): Promise<PriceData | null> {
    return this.priceDataRepository.findOneBy({ symbol });
  }

  async insertPriceData(priceData: PriceData) {
    await this.priceDataRepository.insert(priceData)
  }

  async remove(symbol: string): Promise<void> {
    await this.priceDataRepository.delete(symbol);
  }
}