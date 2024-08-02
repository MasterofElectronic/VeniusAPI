import { Repository } from "typeorm";
import { Venue } from "../../../domain/entities/Venue";
import { VenueRepository } from "../../../domain/repositories/VenueRepository";
import { VenueModel } from "../models/VenueModel";
import dataSource from "../../../ormconfig";





export class TypeORMVenueRepository implements VenueRepository {

    

    constructor(private repository: Repository<VenueModel>){
        this.repository = dataSource.getRepository(VenueModel);
    }

    async create(venue: Venue): Promise<Venue> {
        const venueModel = this.repository.create(venue);
        const savedVenue = await this.repository.save(venueModel);
        
        return new Venue(
            savedVenue.id,
            savedVenue.techo,
            savedVenue.tipo,
            savedVenue.deporte,
            savedVenue.rango,
            savedVenue.tamano,
            savedVenue.imagen,
            savedVenue.venue,
            savedVenue.ciudad,
            savedVenue.departamento,
            savedVenue.inauguracion,
            savedVenue.aforo
        );
    }
    async getVenues(filters: any): Promise<Venue[]> {
        const query = this.repository.createQueryBuilder('venue');

        if (filters.ciudad) {
            query.andWhere('venue.ciudad = :ciudad', {ciudad: filters.ciudad});
        }
        if (filters.aforo){
            query.andWhere('venue.aforo <= :aforo', {aforo: filters.aforo});
        }
        if (filters.tipo){
            query.andWhere('venue.tipo = :tipo', { tipo: filters.tipo });
        }

        const venueModel = await query.getMany();
        return venueModel.map(vm => new Venue(
            vm.id,
            vm.techo,
            vm.tipo,
            vm.deporte,
            vm.rango,
            vm.tamano,
            vm.imagen,
            vm.venue,
            vm.ciudad,
            vm.departamento,
            vm.inauguracion,
            vm.aforo,
        ));
    
    }
    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
    async update(id: number, venue: Venue): Promise<Venue> {
        await this.repository.update(id, venue);
        const updateVenue = await this.repository.findOneBy({id});
        if (!updateVenue){
            throw new Error('Venue not found');
        }
        return new Venue(
            updateVenue.id,
            updateVenue.techo,
            updateVenue.tipo,
            updateVenue.deporte,
            updateVenue.rango,
            updateVenue.tamano,
            updateVenue.imagen,
            updateVenue.venue,
            updateVenue.ciudad,
            updateVenue.departamento,
            updateVenue.inauguracion,
            updateVenue.aforo,
        );
    }
}