import { IsString } from "class-validator"

export class CreateSucribirseDto {

    @IsString()
    email: string

    @IsString()
    usuario: string

    @IsString()
    telefono: string



}
