import { Injectable } from '@nestjs/common';
import { Propiedad } from './entities/propiedad.entity';

@Injectable()
export class PropiedadesService {
  private propiedades: Propiedad[] = [
    {
      id: '1',
      fotos: 'url1,url2,url3',
      comodidades: 'Wi-Fi,TV,Piscina',
      reglas_casa: 'No mascotas,No fumar',
      hora_check_in: '15:00',
      hora_check_out: '11:00',
      rango_precios: '100-200',
    },
    {
      id: '2',
      fotos: 'url4,url5,url6',
      comodidades: 'Wi-Fi,Estacionamiento',
      reglas_casa: 'No fiestas',
      hora_check_in: '14:00',
      hora_check_out: '10:00',
      rango_precios: '80-150',
    },
    {
      id: '3',
      fotos: 'url7,url8,url9',
      comodidades: 'Wi-Fi,Aire acondicionado',
      reglas_casa: 'No niños',
      hora_check_in: '13:00',
      hora_check_out: '12:00',
      rango_precios: '120-250',
    },
  ];
  findAll() {
    return `This action returns all propiedades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Propiedad`;
  }
  // Public method to add a Propiedad to the array
  addPropiedad(propiedad: Propiedad): void {
    this.propiedades.push(propiedad);
  }

  // Public method to get a Propiedad by ID
  getPropiedadById(id: string): Propiedad {
    return this.propiedades.find((p) => p.id === id);
  }
}
