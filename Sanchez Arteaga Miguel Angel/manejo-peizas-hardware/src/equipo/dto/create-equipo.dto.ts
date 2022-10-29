import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";



export class CreateEquipoDto {

    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    @ApiProperty({
            description: 'Descripcion del equipo',
            minLength: 10,
            required: true
        })
    Descripcion_Equipo: string;


    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    @ApiProperty({
        description: 'Carasteristicas del equipo',
        minLength: 5,
        required: true
    })
    Caracteristicas: string;

}
