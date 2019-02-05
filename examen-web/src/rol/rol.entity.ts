import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
// import {PaginaEntity} from "../pagina/pagina.entity";
@Entity('rol') // Es buena practica poner explicitamente el nombre de la tabla que queremos
export class RolEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  nombre: string;

}