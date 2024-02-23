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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeDataController = void 0;
const common_1 = require("@nestjs/common");
const trade_data_service_1 = require("./trade-data.service");
const trade_data_entity_1 = require("./trade-data.entity");
let TradeDataController = class TradeDataController {
    constructor(tradeDataService) {
        this.tradeDataService = tradeDataService;
    }
    getAllTradeData() {
        return this.tradeDataService.findAll();
    }
    async insertTradeData(data) {
        const tradeData = new trade_data_entity_1.TradeData;
        tradeData.resources = data.resources;
        tradeData.timestamp = new Date();
        this.tradeDataService.insertTradeData(tradeData);
        return ({ data: `New resource score of ${tradeData.resources} with timestamp ${tradeData.timestamp} inserted into database` });
    }
};
exports.TradeDataController = TradeDataController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TradeDataController.prototype, "getAllTradeData", null);
__decorate([
    (0, common_1.Post)('/update'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TradeDataController.prototype, "insertTradeData", null);
exports.TradeDataController = TradeDataController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [trade_data_service_1.TradeDataService])
], TradeDataController);
//# sourceMappingURL=trade-data.controller.js.map