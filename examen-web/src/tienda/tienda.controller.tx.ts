import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import {TiendaService} from './tienda.service';
import {__await} from 'tslib';
import {TiendaEntity} from './tienda.entity';
import {FindManyOptions, Like} from 'typeorm';

@Controller('rol')
export class ProductoController{

  constructor(private readonly _productoService: TiendaService) {

  }
}