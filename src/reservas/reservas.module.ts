import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { AnfitrionesModule } from 'src/anfitriones/anfitriones.module';
import { HuespedesModule } from 'src/huespedes/huespedes.module';
import { PropiedadesModule } from 'src/propiedades/propiedades.module';

@Module({
  controllers: [ReservasController],
  providers: [ReservasService],
  imports: [AnfitrionesModule, HuespedesModule, PropiedadesModule]
})
export class ReservasModule { }
