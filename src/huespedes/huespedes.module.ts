import { Module } from '@nestjs/common';
import { HuespedesService } from './huespedes.service';
import { HuespedesController } from './huespedes.controller';

@Module({
  controllers: [HuespedesController],
  providers: [HuespedesService],
  exports: [HuespedesService]
})
export class HuespedesModule { }
