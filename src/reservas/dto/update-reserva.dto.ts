import { PartialType } from '@nestjs/mapped-types';
import { CreateReservaDto } from './create-reserva.dto';
import { IsOptional } from 'class-validator';

export class UpdateReservaDto extends PartialType(CreateReservaDto) {
    @IsOptional()
    readonly id?: string;
}
