
import {Prop, SchemaFactory, Schema } from "@nestjs/mongoose"
import { ObjectId } from "mongoose"

@Schema()
export class Asignatura {

    id:ObjectId

    
    @Prop()
    Descripcion: string

    @Prop()
    Nivel: string

    
    @Prop()
    NumeroCreditos: string


}

export const SchemaAsignatura = SchemaFactory.createForClass(Asignatura)
