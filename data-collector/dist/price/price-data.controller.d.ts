import { PriceDataService } from './price-data.service';
import { PriceData } from './price-data.entity';
export declare class PriceDataController {
    private readonly priceDataService;
    constructor(priceDataService: PriceDataService);
    getAllPriceData(): Promise<PriceData[]>;
    insertPriceData(): Promise<{
        data: string;
    }>;
}
