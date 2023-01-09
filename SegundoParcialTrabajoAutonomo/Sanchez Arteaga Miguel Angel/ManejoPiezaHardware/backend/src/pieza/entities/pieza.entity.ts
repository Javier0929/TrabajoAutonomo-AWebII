import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"


@Schema()
export class Pieza {

    @ApiProperty()
    @Prop({
        index: true
    })
    Descripcion_De_Pieza: string


    @ApiProperty()
    @Prop()
    Caracteristica: string
    

    @ApiProperty()
    @Prop({
        type: String,
        unique: true,
        index: true,
    })
    Identificaion_Pieza: string
}


export const PiezaSchema = SchemaFactory.createForClass( Pieza )

function ApiPropert() {
    throw new Error("Function not implemented.")
}
