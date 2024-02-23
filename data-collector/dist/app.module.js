"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const price_data_entity_1 = require("./price/price-data.entity");
const price_data_module_1 = require("./price/price-data.module");
const core_1 = require("@nestjs/core");
const trade_data_entity_1 = require("./trade/trade-data.entity");
const trade_data_module_1 = require("./trade/trade-data.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '192.168.1.10',
                port: 3306,
                username: 'admin',
                password: 'admin',
                database: 'trader',
                entities: [price_data_entity_1.PriceData, trade_data_entity_1.TradeData]
            }),
            trade_data_module_1.TradeDataModule,
            price_data_module_1.PriceDataModule,
            core_1.RouterModule.register([{
                    path: '/price-data',
                    module: price_data_module_1.PriceDataModule
                }, { path: '/trade-data', module: trade_data_module_1.TradeDataModule }])],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map