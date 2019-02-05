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
const rol_service_1 = require("./rol.service");
const rol_entity_1 = require("./rol.entity");
const rol_controller_tx_1 = require("./rol.controller.tx");
let RolModule = class RolModule {
};
RolModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                rol_entity_1.RolEntity,
            ]),
        ],
        controllers: [
            rol_controller_tx_1.ProductoController,
        ],
        providers: [
            rol_service_1.RolService,
        ],
        exports: [
            rol_service_1.RolService,
        ],
    })
], RolModule);
exports.RolModule = RolModule;
//# sourceMappingURL=rol.module.js.map