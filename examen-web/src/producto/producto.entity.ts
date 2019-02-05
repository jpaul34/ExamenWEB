import { BeforeInsert, Column, Entity, Index, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { VentasEntity } from '../ventas/ventas.entity';
import { TiendaEntity } from '../tienda/tienda.entity';
// import {PaginaEntity} from "../pagina/pagina.entity";

@Entity('producto') // Es buena practica poner explicitamente el nombre de la tabla que queremos
export class ProductoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  nombre: string;

  @Column()
  precio: number;

  @OneToMany(
    type => VentasEntity,   // Que tabla vamos a relacionar
    venta => venta.id, // Campo que hace referencia como el Foreing key
  )
  productos: ProductoEntity[];

  @ManyToOne(
    type => TiendaEntity,   // Que tabla vamos a relacionar
    tienda => tienda.id, // Campo que hace referencia como el Foreing key
  )
  tiendas: TiendaEntity[];


}