import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guia {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    fecha: string

    @Column()
    horatransmision: string

    @Column()
    escalarating: string
}
