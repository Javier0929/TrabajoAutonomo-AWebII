import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator";




export class CreateComputadoraDto {

    @ApiProperty({
        description: 'Descripcion de la Computadora'
    })
    @IsString()
    Descripcion: string


    @ApiProperty({
        description: 'Detalles tecnicos y espesificos del PC'
    })
    @IsString()
    Detallestecnicos: string


    @ApiProperty({
        description: 'Descripcion del precio por hora que va tener el prestamo'
    })

    @IsString()
    Costo_Por_Hora_Prestamo: string


}
