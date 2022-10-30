import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Asignatura {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    descripcion: string

    @Column()
    nivel: string

    @Column()
    numerodecreditos: number
}
