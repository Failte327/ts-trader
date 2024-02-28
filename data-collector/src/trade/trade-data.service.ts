import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TradeData } from './trade-data.entity';

@Injectable()
export class TradeDataService {
  constructor(
    @InjectRepository(TradeData)
    private tradeDataRepository: Repository<TradeData>,
  ) {}

  findAll(): Promise<TradeData[]> {
    return this.tradeDataRepository.find();
  }

  findOne(resources: string): Promise<TradeData | null> {
    return this.tradeDataRepository.findOneBy({ resources });
  }

  async insertTradeData(tradeData: TradeData) {
    await this.tradeDataRepository.insert(tradeData)
  }

  async remove(resources: string): Promise<void> {
    await this.tradeDataRepository.delete(resources);
  }
}