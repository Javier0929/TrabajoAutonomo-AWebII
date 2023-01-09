import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Parquear {


    @ApiProperty()
    @Prop()
    FechaEntrada: string


    @ApiProperty()
    @Prop()
    HoraEntrada: string


    @ApiProperty()
    @Prop()
    FechaSalida: string


    @ApiProperty()
    @Prop()
    HoraSalida: string

}

export const ParquearSchema = SchemaFactory.createForClass(Parquear);



