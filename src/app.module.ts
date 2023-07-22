import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservasModule } from './reservas/reservas.module';
import { HuespedesModule } from './huespedes/huespedes.module';
import { PropiedadesModule } from './propiedades/propiedades.module';
import { AnfitrionesModule } from './anfitriones/anfitriones.module';

@Module({
  imports: [ReservasModule, HuespedesModule, PropiedadesModule, AnfitrionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
