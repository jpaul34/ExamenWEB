import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import {VentasService} from './ventas.service';
import {__await} from 'tslib';
import {VentasEntity} from './ventas.entity';
import {FindManyOptions, Like} from 'typeorm';

@Controller('venta')
export class ProductoController{

  constructor(private readonly _productoService: VentasService) {

  }
}