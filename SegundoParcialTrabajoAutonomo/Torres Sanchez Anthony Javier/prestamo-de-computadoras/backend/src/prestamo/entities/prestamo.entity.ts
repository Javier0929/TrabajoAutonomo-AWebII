import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, ObjectId } from "mongoose";


@Schema()
export class Prestamo extends Document{


    _id: ObjectId


    @ApiProperty()
    @Prop()
    Fecha: string


    @ApiProperty()
    @Prop()
    Hora: string


    @ApiProperty()
    @Prop()
    Numero_horas_de_Prestamo: string
}


export const ShcemaPrestamos = SchemaFactory.createForClass( Prestamo )