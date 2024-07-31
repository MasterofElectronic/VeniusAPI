import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class VenueModel {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    techo: string

    @Column()
    tipo: string

    @Column()
    deporte: string

    @Column('json')
    rango: {min: number; max: number}

    @Column('json')
    tamano: {min: number; max: number}

    @Column()
    imagen: string

    @Column()
    venue: string

    @Column()
    ciudad: string

    @Column()
    departamento: string

    @Column()
    inauguracion: number

    @Column()
    aforo: number

}