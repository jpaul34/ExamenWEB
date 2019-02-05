import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesUsuarioService } from './rolesUsuario.service';
import { RolesUsuarioEntity } from './rolesUsuario.entity';
import { ProductoController } from './rolesUsuario.controller.tx';

@Module(
  {
    imports: [
      TypeOrmModule.forFeature(
        [
          RolesUsuarioEntity,
        ],
      ),
    ],
    controllers: [
      ProductoController,
    ],
    providers: [
      RolesUsuarioService,
    ],
    exports: [
      // Servicios o modulos
      RolesUsuarioService,
    ],
  },
)
export class RolesUsuarioModule {

}
