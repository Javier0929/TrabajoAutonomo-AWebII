import { IsString } from "class-validator";

export class CreateContactanoDto {

    @IsString()
    nombre: string;


    @IsString()
    correoelectronico: string;

    @IsString()
    celular: string;
  
    @IsString()
    mensaje: string;
}
