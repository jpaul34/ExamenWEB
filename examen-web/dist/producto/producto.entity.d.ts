import { TiendaEntity } from '../tienda/tienda.entity';
export declare class ProductoEntity {
    id: number;
    nombre: string;
    precio: number;
    productos: ProductoEntity[];
    tiendas: TiendaEntity[];
}
