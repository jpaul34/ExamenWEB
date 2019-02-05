import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoService } from './producto.service';
import { ProductoEntity } from './producto.entity';
import { ProductoController } from './producto.controller.tx';

@Module(
  {
    imports: [
      TypeOrmModule.forFeature(
        [
          ProductoEntity,
        ],
      ),
    ],
    controllers: [
      ProductoController,
    ],
    providers: [
      ProductoService,
    ],
    exports: [
      // Servicios o modulos
      ProductoService,
    ],
  },
)
export class ProductoModule {

}
