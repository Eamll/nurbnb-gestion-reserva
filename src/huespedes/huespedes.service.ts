import { Injectable } from '@nestjs/common';
import { Huesped } from './entities/huesped.entity';

@Injectable()
export class HuespedesService {

  public huespedes: Huesped[] = [
    {
      id: '1',
      reservas: ['reserva1', 'reserva2'], // Array of string IDs representing the related Reserva entities
      calificacion: '5',
    },
    {
      id: '2',
      reservas: ['reserva3'], // Array of string IDs representing the related Reserva entities
      calificacion: '4.5',
    },
    {
      id: '3',
      reservas: [], // Empty array if there are no related Reserva entities
      calificacion: '4',
    },
    // Add more Huesped objects as needed
  ];
  findAll() {
    return `This action returns all huespedes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Huesped`;
  }
  // Public method to add Huesped entities to the array
  addHuesped(huesped: Huesped): void {
    this.huespedes.push(huesped);
  }
  // Public method to get a Huesped by ID
  getHuespedById(id: string): Huesped {
    return this.huespedes.find((h) => h.id === id);
  }
}
