import { Repository } from 'typeorm';
import { TradeData } from './trade-data.entity';
export declare class TradeDataService {
    private tradeDataRepository;
    constructor(tradeDataRepository: Repository<TradeData>);
    findAll(): Promise<TradeData[]>;
    findOne(resources: number): Promise<TradeData | null>;
    insertTradeData(tradeData: TradeData): Promise<void>;
    remove(resources: number): Promise<void>;
}
