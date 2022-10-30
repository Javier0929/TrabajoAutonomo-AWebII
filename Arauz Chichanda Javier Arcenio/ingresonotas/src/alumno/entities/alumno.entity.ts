import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alumno {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nombre: string

    @Column()
    identificacion: number
}
