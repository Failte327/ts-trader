import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceDataService } from './price-data.service';
import { PriceDataController } from './price-data.controller';
import { PriceData } from './price-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PriceData])],
  providers: [PriceDataService],
  controllers: [PriceDataController],
})
export class PriceDataModule {}
