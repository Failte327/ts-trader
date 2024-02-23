"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceDataController = void 0;
const common_1 = require("@nestjs/common");
const price_data_service_1 = require("./price-data.service");
const price_data_entity_1 = require("./price-data.entity");
let PriceDataController = class PriceDataController {
    constructor(priceDataService) {
        this.priceDataService = priceDataService;
    }
    getAllPriceData() {
        return this.priceDataService.findAll();
    }
    async insertPriceData() {
        const symbols = ['ADXUSDT', 'GLMUSD', 'CLVUSD', 'SANDUSD', 'OCEANUSD'];
        for (var symbol in symbols) {
            const response = await fetch(`https://api.binance.us/api/v3/ticker/price?symbol=${symbols[symbol]}`);
            const data = await response.json();
            const priceData = new price_data_entity_1.PriceData;
            priceData.symbol = data["symbol"];
            priceData.price = data["price"];
            priceData.timestamp = new Date();
            this.priceDataService.insertPriceData(priceData);
            console.log(`Inserting symbol, price, and timestamp data into for symbol ${data["symbol"]} the database.`);
        }
        return ({ data: `Gathering data on symbols ${symbols} from Binance API` });
    }
};
exports.PriceDataController = PriceDataController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PriceDataController.prototype, "getAllPriceData", null);
__decorate([
    (0, common_1.Post)('/update'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PriceDataController.prototype, "insertPriceData", null);
exports.PriceDataController = PriceDataController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [price_data_service_1.PriceDataService])
], PriceDataController);
//# sourceMappingURL=price-data.controller.js.map