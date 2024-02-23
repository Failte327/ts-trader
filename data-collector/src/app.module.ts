import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceData } from './price/price-data.entity';
import { PriceDataModule } from './price/price-data.module';
import { RouterModule } from '@nestjs/core';
import { TradeData } from './trade/trade-data.entity';
import { TradeDataModule } from './trade/trade-data.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '192.168.1.10',
    port: 3306,
    username: 'admin',
    password: 'admin',
    database: 'trader',
    entities: [PriceData, TradeData]
  }),
  TradeDataModule,
  PriceDataModule,
  RouterModule.register([{
  path: '/price-data',
  module: PriceDataModule
}, {path: '/trade-data', module: TradeDataModule}])],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
