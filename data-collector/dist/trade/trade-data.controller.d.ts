import { TradeDataService } from './trade-data.service';
import { TradeData } from './trade-data.entity';
export declare class TradeDataController {
    private readonly tradeDataService;
    constructor(tradeDataService: TradeDataService);
    getAllTradeData(): Promise<TradeData[]>;
    insertTradeData(data: any): Promise<{
        data: string;
    }>;
}
