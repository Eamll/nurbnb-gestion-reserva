export class Reserva {
    id: string;
    fecha_inicio: Date;
    estado: string;
    fecha_fin?: Date;
    metodo_pago?: string;
    propiedadId: string;
    huespedId: string;
    anfitrionId: string;
}
