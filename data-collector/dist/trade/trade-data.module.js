"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeDataModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const trade_data_service_1 = require("./trade-data.service");
const trade_data_controller_1 = require("./trade-data.controller");
const trade_data_entity_1 = require("./trade-data.entity");
let TradeDataModule = class TradeDataModule {
};
exports.TradeDataModule = TradeDataModule;
exports.TradeDataModule = TradeDataModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([trade_data_entity_1.TradeData])],
        providers: [trade_data_service_1.TradeDataService],
        controllers: [trade_data_controller_1.TradeDataController],
    })
], TradeDataModule);
//# sourceMappingURL=trade-data.module.js.map