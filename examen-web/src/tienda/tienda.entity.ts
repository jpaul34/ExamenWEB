import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
// import {PaginaEntity} from "../pagina/pagina.entity";
@Entity('tienda') // Es buena practica poner explicitamente el nombre de la tabla que queremos
export class TiendaEntity {

  @PrimaryGeneratedColumn()
  id: number;

}