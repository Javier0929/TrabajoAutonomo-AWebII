import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import {  Document } from "mongoose";


@Schema()
export class Equipo extends Document{

    @Prop()
    @ApiProperty()
    Descripcion_Equipo: string;


    @Prop({
         index:true
    })
    @ApiProperty()
    Caracteristicas: string;

}


export const EquipoSchema = SchemaFactory.createForClass( Equipo )

