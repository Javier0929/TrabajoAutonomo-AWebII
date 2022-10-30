import {Prop, SchemaFactory, Schema } from "@nestjs/mongoose"
import { ObjectId } from "mongoose"

@Schema()
export class Nota {
    
    id:ObjectId

    
    @Prop()
    Parcial: string

    @Prop()
    Nota: Number

    
    @Prop()
    Observacion: string

        
    @Prop()
    Estado: string

}


export const SchemaNota = SchemaFactory.createForClass(Nota)
