import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolService } from './rol.service';
import { RolEntity } from './rol.entity';
import { ProductoController } from './rol.controller.tx';

@Module(
  {
    imports: [
      TypeOrmModule.forFeature(
        [
          RolEntity,
        ],
      ),
    ],
    controllers: [
      ProductoController,
    ],
    providers: [
      RolService,
    ],
    exports: [
      // Servicios o modulos
      RolService,
    ],
  },
)
export class RolModule {

}
