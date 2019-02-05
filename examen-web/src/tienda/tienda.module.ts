import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaService } from './tienda.service';
import { TiendaEntity } from './tienda.entity';
import { ProductoController } from './tienda.controller.tx';

@Module(
  {
    imports: [
      TypeOrmModule.forFeature(
        [
          TiendaEntity,
        ],
      ),
    ],
    controllers: [
      ProductoController,
    ],
    providers: [
      TiendaService,
    ],
    exports: [
      // Servicios o modulos
      TiendaService,
    ],
  },
)
export class TiendaModule {

}
