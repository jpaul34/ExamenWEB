import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import {ProductoService} from './producto.service';
import {__await} from 'tslib';
import {ProductoEntity} from './producto.entity';
import {FindManyOptions, Like} from 'typeorm';

@Controller('producto')
export class ProductoController{

  constructor(private readonly _productoService: ProductoService) {

  }
}