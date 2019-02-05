import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import {UsuarioService} from './usuario.service';
import {__await} from 'tslib';
import {UsuarioEntity} from './usuario.entity';
import {FindManyOptions, Like} from 'typeorm';

@Controller('usuario')
export class ProductoController{

  constructor(private readonly _productoService: UsuarioService) {

  }
}