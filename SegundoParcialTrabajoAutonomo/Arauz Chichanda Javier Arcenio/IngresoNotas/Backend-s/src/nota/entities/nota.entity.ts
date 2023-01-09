import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Nota {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    parcial: string

    @Column()
    nota: string

    @Column()
    observacion: string

    @Column()
    estado: string
}
