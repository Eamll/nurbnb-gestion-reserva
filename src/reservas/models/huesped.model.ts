// huesped.model.ts

import { Reserva } from '../entities/reserva.entity';
import { Resena } from './resena.model';


export class Huesped {
    reservas: Reserva[];
    reseñasRecibidas: Resena[];
    calificaciones: number;
}
