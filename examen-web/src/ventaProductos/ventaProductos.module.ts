import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaProductosService } from './ventaProductos.service';
import { VentaProductosEntity } from './ventaProductos.entity';
import { ProductoController } from './ventaProductos.controller.tx';

@Module(
  {
    imports: [
      TypeOrmModule.forFeature(
        [
          VentaProductosEntity,
        ],
      ),
    ],
    controllers: [
      ProductoController,
    ],
    providers: [
      VentaProductosService,
    ],
    exports: [
      // Servicios o modulos
      VentaProductosService,
    ],
  },
)
export class VentaProductosModule {

}
