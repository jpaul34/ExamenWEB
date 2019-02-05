import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasService } from './ventas.service';
import { VentasEntity } from './ventas.entity';
import { ProductoController } from './ventas.controller.tx';

@Module(
  {
    imports: [
      TypeOrmModule.forFeature(
        [
          VentasEntity,
        ],
      ),
    ],
    controllers: [
      ProductoController,
    ],
    providers: [
      VentasService,
    ],
    exports: [
      // Servicios o modulos
      VentasService,
    ],
  },
)
export class VentasModule {

}
