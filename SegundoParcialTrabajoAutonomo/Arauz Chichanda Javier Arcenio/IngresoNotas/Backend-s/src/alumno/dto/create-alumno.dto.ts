import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreateAlumnoDto {

    @ApiProperty()
    @IsString()
    nombre: string

    @ApiProperty()
    @IsString()
    identificacion: number

}
