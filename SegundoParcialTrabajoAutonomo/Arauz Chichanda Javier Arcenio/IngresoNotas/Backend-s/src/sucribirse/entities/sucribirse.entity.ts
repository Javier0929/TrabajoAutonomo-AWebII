import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Sucribirse {

    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column()
    email: string

    @Column()
    usuario: string

    @Column()
    telefono: string
    
}
