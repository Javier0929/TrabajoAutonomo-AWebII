
import {Prop, SchemaFactory, Schema } from "@nestjs/mongoose"
import { ObjectId } from "mongoose"


@Schema()
export class Alumno {

    id: ObjectId


    @Prop()
    Nombre: string

    @Prop()
    Identificacion: string
  
}

export const SchemaAlumno= SchemaFactory.createForClass(Alumno)