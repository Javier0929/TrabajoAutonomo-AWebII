import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Canal {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nombreCanal:string
}