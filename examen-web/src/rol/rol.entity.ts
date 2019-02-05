import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import {UsuarioEntity} from "../usuario/usuario.entity";
// import {PaginaEntity} from "../pagina/pagina.entity";
@Entity('rol') // Es buena practica poner explicitamente el nombre de la tabla que queremos
export class RolEntity {

  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  nombre: string;

  @OneToMany(
      type => UsuarioEntity,   //Que tabla vamos a relacionar
      usuario => usuario.id //Campo que hace referencia como el Foreing key
  )
  usuarios: UsuarioEntity[];
}
