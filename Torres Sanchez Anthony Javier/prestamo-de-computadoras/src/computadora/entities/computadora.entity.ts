import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, ObjectId } from "mongoose";



@Schema()
export class Computadora extends Document{

    _id: ObjectId

    @ApiProperty()
    @Prop()
    Descripcion: string


    @ApiProperty()
    @Prop()
    Detallestecnicos: string


    @ApiProperty()
    @Prop()
    Costo_Por_Hora_Prestamo: number
}

export const SchemaComputadora = SchemaFactory.createForClass( Computadora )