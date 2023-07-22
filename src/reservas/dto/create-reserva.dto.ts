import { Transform, Type } from "class-transformer";
import { IsString, IsDate, ValidateIf, isString, IsOptional } from "class-validator";



export class CreateReservaDto {
    @IsString()
    estado: string;

    @IsDate()
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    fecha_inicio: Date;

    @IsString()
    @IsOptional()
    metodo_pago?: string;

    @IsDate()
    @IsOptional()
    @Transform(({ value }) => (value ? new Date(value) : undefined))
    @Type(() => Date)
    fecha_fin?: Date;

    @IsString()
    propiedadId: string;

    @IsString()
    huespedId: string;

    @IsString()
    anfitrionId: string;
}
