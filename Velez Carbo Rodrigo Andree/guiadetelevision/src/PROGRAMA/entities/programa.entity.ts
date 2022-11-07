import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Programa {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    programatv: string

    @Column()
    categoria: string

    @Column()
    tipo: string
}
