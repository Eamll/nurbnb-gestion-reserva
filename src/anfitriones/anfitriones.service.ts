import { Injectable } from '@nestjs/common';
import { Anfitrion } from './entities/anfitrion.entity';

@Injectable()
export class AnfitrionesService {
  private anfitriones
    : Anfitrion[] = [
      {
        id: '1',
        propiedades: ['propiedad1', 'propiedad2'], // Array of string IDs representing the related Propiedad entities
        reservas_recibidas: ['reserva1', 'reserva2'], // Array of string IDs representing the related Reserva entities
        calificacion: '4.5',
      },
      {
        id: '2',
        propiedades: ['propiedad3'], // Array of string IDs representing the related Propiedad entities
        reservas_recibidas: ['reserva3'], // Array of string IDs representing the related Reserva entities
        calificacion: '4.2',
      },
      {
        id: '3',
        propiedades: [], // Empty array if there are no related Propiedad entities
        reservas_recibidas: [], // Empty array if there are no related Reserva entities
        calificacion: '3.9',
      },
      // Add more Anfitrion objects as needed
    ];


  findAll() {
    return `This action returns all anfitriones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Anfitrion`;
  }

  // Public method to add Anfitrion entities to the array
  addAnfitrion(anfitrion: Anfitrion): void {
    this.anfitriones.push(anfitrion);
  }

  // Public method to get an Anfitrion by ID
  getAnfitrionById(id: string): Anfitrion {
    return this.anfitriones.find((a) => a.id === id);
  }
}
