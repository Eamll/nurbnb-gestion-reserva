import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { v4 as uuid } from 'uuid';
import { Reserva } from './entities/reserva.entity';
import { HuespedesService } from 'src/huespedes/huespedes.service';
import { AnfitrionesService } from 'src/anfitriones/anfitriones.service';
import { PropiedadesService } from 'src/propiedades/propiedades.service';
@Injectable()
export class ReservasService {
  constructor(
    private readonly huespedesServices: HuespedesService,
    private readonly anfitrionesService: AnfitrionesService,
    private readonly propiedadesService: PropiedadesService,
  ) { }

  private reservas: Reserva[] = [
    {
      id: uuid(),
      estado: 'Aprobada',
      fecha_inicio: new Date('2023-07-20T12:00:00'),
      metodo_pago: 'paypal',
      fecha_fin: new Date('2023-07-22T12:00:00'),
      propiedadId: 'propiedad1',
      huespedId: 'huesped1',
      anfitrionId: 'anfitrion1',
    },
    {
      id: uuid(),
      estado: 'Pendiente',
      fecha_inicio: new Date('2023-07-20T12:00:00'),
      propiedadId: 'propiedad2',
      huespedId: 'huesped2',
      anfitrionId: 'anfitrion2',
    },
    {
      id: uuid(),
      estado: 'Cancelada',
      fecha_inicio: new Date('2023-07-20T12:00:00'),
      metodo_pago: 'binance',
      fecha_fin: new Date('2023-07-23T12:00:00'),
      propiedadId: 'propiedad3',
      huespedId: 'huesped3',
      anfitrionId: 'anfitrion3',
    },
  ]
  // Method to add a reserva to Huesped and Anfitrion
  private addReservaToEntities(reserva: Reserva) {
    // Find the Huesped entity in the huespedes array

    const huesped = this.huespedesServices.getHuespedById(reserva.huespedId);
    if (!huesped) {
      throw new NotFoundException(`Huesped with id ${reserva.huespedId} not found`);
    }

    // Find the Anfitrion entity in the anfitriones array
    const anfitrion = this.anfitrionesService.getAnfitrionById(reserva.anfitrionId);
    if (!anfitrion) {
      throw new NotFoundException(`Anfitrion with id ${reserva.anfitrionId} not found`);
    }

    const propiedad = this.propiedadesService.getPropiedadById(reserva.propiedadId);
    if (!propiedad) {
      throw new NotFoundException(`Propiedad with id ${reserva.propiedadId} not found`);
    }
    // Add the reserva to the Huesped entity
    huesped.reservas.push(reserva.id);
    // Add the reserva to the Anfitrion entity
    anfitrion.reservas_recibidas.push(reserva.id);
  }

  create(createReservaDto: CreateReservaDto) {

    const allowedEstados = ["aprobada", "en curso", "finalizada", "cancelada", "expirada", "pendiente"];
    if (!allowedEstados.includes(createReservaDto.estado.toLowerCase())) {
      throw new BadRequestException(`Invalid estado. Allowed estados are: ${allowedEstados.join(', ')}`);
    }
    if (createReservaDto.estado.toLowerCase() === 'pendiente'
      && (createReservaDto.fecha_fin || createReservaDto.metodo_pago)) {
      throw new HttpException(`Can't add fecha_fin and/or metodo_pago when estado is Pendiente`, 404)
    }
    const reserva: Reserva = {
      id: uuid(),
      ...createReservaDto,
    }
    // Add the reserva to Huesped and Anfitrion entities
    this.addReservaToEntities(reserva);
    this.reservas.push(reserva);

    return reserva;
  }

  findAll() {
    return this.reservas;
  }

  findOne(id: string) {
    const reserva = this.reservas.find(reserva => reserva.id === id);
    if (!reserva) throw new NotFoundException(`Reserva with id: ${id} not found`);
    return reserva;
  }

  update(id: string, updateReservaDto: UpdateReservaDto) {
    let reservaDB = this.findOne(id);
    if (updateReservaDto.id && updateReservaDto.id !== id) {
      throw new BadRequestException(`Reserva id is not valid inside body`);
    }

    this.reservas = this.reservas.map(reserva => {
      if (reserva.id === id) {
        reservaDB = { ...reservaDB, ...updateReservaDto, id }
        return reservaDB;
      }
      return reserva;
    });
    return reservaDB;
  }

  remove(id: string) {
    const reserva = this.findOne(id);
    this.reservas = this.reservas.filter(reserva => reserva.id !== id)
  }
}
