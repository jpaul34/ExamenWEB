import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import { ProductoEntity } from '../producto/producto.entity';
// import {PaginaEntity} from "../pagina/pagina.entity";

@Entity('venta') // Es buena practica poner explicitamente el nombre de la tabla que queremos
export class VentasEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  nombre: string;

  @Column()
  fecha: string;

  @Column()
  latitud: number;

  @Column()
  longitud: number;

  @OneToMany(
    type => ProductoEntity,   // Que tabla vamos a relacionar
    producto => producto.id // Campo que hace referencia como el Foreing key
  )
  productos: ProductoEntity[];
}