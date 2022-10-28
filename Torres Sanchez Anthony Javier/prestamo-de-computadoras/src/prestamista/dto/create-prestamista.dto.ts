import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePrestamistaDto {

    @ApiProperty({
        description: 'Nombre del prestamista'
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    Nombre: string


    @ApiProperty({
        description: 'Numero de Identificaion del prestamista'
    })
    @IsNotEmpty()
    @IsPositive()
    @Min(3)
    Identificaion: number

}
