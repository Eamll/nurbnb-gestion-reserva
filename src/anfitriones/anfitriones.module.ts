import { Module } from '@nestjs/common';
import { AnfitrionesService } from './anfitriones.service';
import { AnfitrionesController } from './anfitriones.controller';

@Module({
  controllers: [AnfitrionesController],
  providers: [AnfitrionesService],
  exports: [AnfitrionesService]
})
export class AnfitrionesModule { }
