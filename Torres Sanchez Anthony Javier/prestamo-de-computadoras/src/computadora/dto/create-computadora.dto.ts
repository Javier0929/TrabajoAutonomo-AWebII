import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator";




export class CreateComputadoraDto {

    @ApiProperty({
        description: 'Descripcion de la Computadora'
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    Descripcion: string


    @ApiProperty({
        description: 'Detalles tecnicos y espesificos del PC'
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    Detallestecnicos: string


    @ApiProperty({
        description: 'Descripcion del precio por hora que va tener el prestamo'
    })
    @IsPositive()
    @IsNotEmpty()
    @Min(2)
    Costo_Por_Hora_Prestamo: number


}
