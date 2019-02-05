import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import {RolEntity} from "../rol/rol.entity";
// import {PaginaEntity} from "../pagina/pagina.entity";
@Entity('usuario') // Es buena practica poner explicitamente el nombre de la tabla que queremos
export class UsuarioEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  password: string;

  @Column()
  fecha_nacimiento: string;

  @OneToMany(
      type => RolEntity,   //Que tabla vamos a relacionar
      rol => rol.id //Campo que hace referencia como el Foreing key
  )
  roles: RolEntity[];

}