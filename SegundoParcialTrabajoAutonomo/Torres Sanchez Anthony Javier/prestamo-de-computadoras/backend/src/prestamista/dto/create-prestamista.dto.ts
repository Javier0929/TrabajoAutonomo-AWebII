import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePrestamistaDto {

    @ApiProperty({
        description: 'Nombre del prestamista'
    })
    @IsString()
    Nombre: string


    @ApiProperty({
        description: 'Numero de Identificaion del prestamista'
    })
    @IsString()
    Identificaion: string

}
