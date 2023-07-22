export class Reserva {
    id: string;
    fecha_inicio: Date;
    estado: string;
    fecha_fin?: Date;
    metodo_pago?: string;
    propiedadId: string;   // ID of the related Propiedad
    huespedId: string;     // ID of the related Huesped
    anfitrionId: string;   // ID of the related Anfitrion
}
