import { ProductoEntity } from '../producto/producto.entity';
export declare class VentasEntity {
    id: number;
    nombre: string;
    fecha: string;
    latitud: number;
    longitud: number;
    productos: ProductoEntity[];
}
