import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import {VentaProductosService} from './ventaProductos.service';
import {__await} from 'tslib';
import {VentaProductosEntity} from './ventaProductos.entity';
import {FindManyOptions, Like} from 'typeorm';

@Controller('ventaProducto')
export class ProductoController{

  constructor(private readonly _productoService: VentaProductosService) {

  }
}