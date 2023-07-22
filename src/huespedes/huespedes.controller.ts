import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HuespedesService } from './huespedes.service';

@Controller('huespedes')
export class HuespedesController {
  constructor(private readonly huespedesService: HuespedesService) { }


  @Get()
  findAll() {
    return this.huespedesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.huespedesService.findOne(+id);
  }


}
