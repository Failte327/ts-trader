import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TradeDataService } from './trade-data.service';
import { TradeDataController } from './trade-data.controller';
import { TradeData } from './trade-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TradeData])],
  providers: [TradeDataService],
  controllers: [TradeDataController],
})
export class TradeDataModule {}