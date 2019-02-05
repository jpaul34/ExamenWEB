"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tienda_service_1 = require("./tienda.service");
const tienda_entity_1 = require("./tienda.entity");
const tienda_controller_tx_1 = require("./tienda.controller.tx");
let TiendaModule = class TiendaModule {
};
TiendaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                tienda_entity_1.TiendaEntity,
            ]),
        ],
        controllers: [
            tienda_controller_tx_1.ProductoController,
        ],
        providers: [
            tienda_service_1.TiendaService,
        ],
        exports: [
            tienda_service_1.TiendaService,
        ],
    })
], TiendaModule);
exports.TiendaModule = TiendaModule;
//# sourceMappingURL=tienda.module.js.map