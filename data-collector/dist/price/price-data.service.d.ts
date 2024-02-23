import { Repository } from 'typeorm';
import { PriceData } from './price-data.entity';
export declare class PriceDataService {
    private priceDataRepository;
    constructor(priceDataRepository: Repository<PriceData>);
    findAll(): Promise<PriceData[]>;
    findOne(symbol: string): Promise<PriceData | null>;
    insertPriceData(priceData: PriceData): Promise<void>;
    remove(symbol: string): Promise<void>;
}
