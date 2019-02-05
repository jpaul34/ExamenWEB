import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import {RolService} from './rol.service';
import {__await} from 'tslib';
import {RolEntity} from './rol.entity';
import {FindManyOptions, Like} from 'typeorm';

@Controller('rol')
export class ProductoController{

  constructor(private readonly _productoService: RolService) {

  }
}