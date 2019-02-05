import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './usuario.entity';
import { ProductoController } from './usuario.controller.tx';

@Module(
  {
    imports: [
      TypeOrmModule.forFeature(
        [
          UsuarioEntity,
        ],
      ),
    ],
    controllers: [
      ProductoController,
    ],
    providers: [
      UsuarioService,
    ],
    exports: [
      // Servicios o modulos
      UsuarioService,
    ],
  },
)
export class UsuarioModule {

}
