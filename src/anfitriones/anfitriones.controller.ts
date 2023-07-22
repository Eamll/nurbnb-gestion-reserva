import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnfitrionesService } from './anfitriones.service';

@Controller('anfitriones')
export class AnfitrionesController {
  constructor(private readonly anfitrionesService: AnfitrionesService) { }


  @Get()
  findAll() {
    return this.anfitrionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anfitrionesService.findOne(+id);
  }


}
