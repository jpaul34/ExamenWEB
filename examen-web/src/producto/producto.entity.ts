import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
// import {PaginaEntity} from "../pagina/pagina.entity";
@Entity('noticia') // Es buena practica poner explicitamente el nombre de la tabla que queremos
export class ProductoEntity {

  @PrimaryGeneratedColumn()
  id: number;

}