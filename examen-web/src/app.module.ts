import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';

import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {RolEntity} from './rol/rol.entity';
import {RolModule} from './rol/rol.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
        {
          type: 'mysql',
          host: '192.168.99.100',
          port: 32779,
          database: 'tienda',
          username: 'examen',
          password: '1234',
          synchronize: true,
          dropSchema: false,
          entities: [
            UsuarioEntity,
            RolEntity
          ]
        }
    ),
    UsuarioModule,
    RolModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
