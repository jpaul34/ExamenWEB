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
const typeorm_1 = require("typeorm");
const ventas_entity_1 = require("../ventas/ventas.entity");
const tienda_entity_1 = require("../tienda/tienda.entity");
let ProductoEntity = class ProductoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProductoEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "precio", void 0);
__decorate([
    typeorm_1.OneToMany(type => ventas_entity_1.VentasEntity, venta => venta.id),
    __metadata("design:type", Array)
], ProductoEntity.prototype, "productos", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tienda_entity_1.TiendaEntity, tienda => tienda.id),
    __metadata("design:type", Array)
], ProductoEntity.prototype, "tiendas", void 0);
ProductoEntity = __decorate([
    typeorm_1.Entity('producto')
], ProductoEntity);
exports.ProductoEntity = ProductoEntity;
//# sourceMappingURL=producto.entity.js.map