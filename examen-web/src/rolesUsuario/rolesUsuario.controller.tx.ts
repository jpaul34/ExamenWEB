import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res} from '@nestjs/common';
import {RolesUsuarioService} from './rolesUsuario.service';
import {__await} from 'tslib';
import {RolesUsuarioEntity} from './rolesUsuario.entity';
import {FindManyOptions, Like} from 'typeorm';

@Controller('rolesUsuario')
export class ProductoController{

  constructor(private readonly _productoService: RolesUsuarioService) {

  }
}