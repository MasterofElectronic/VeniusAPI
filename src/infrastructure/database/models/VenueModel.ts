import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Venue } from '../../../domain/entities/Venue';



@Entity('venues')
export class VenueModel extends Venue {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    techo!: string;

    @Column()
    tipo!: string;

    @Column()
    deporte!: string;

    @Column('jsonb')
    rango!: { min: number; max: number; };

    @Column('jsonb')
    tamano!: { min: number; max: number; };

    @Column()
    imagen!: string;

    @Column()
    venue!: string;

    @Column()
    ciudad!: string;

    @Column()
    departamento!: string;

    @Column()
    inauguracion!: number;

    @Column()
    aforo!: number;

}