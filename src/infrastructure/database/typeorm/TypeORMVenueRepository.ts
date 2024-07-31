import { Repository } from "typeorm";
import { Venue } from "../../../domain/entities/Venue";
import { VenueRepository } from "../../../domain/repositories/VenueRepository";
import { VenueModel } from "../models/VenueModel";





export class TypeORMVenueRepository implements VenueRepository {

    constructor(private repository: Repository<VenueModel>){}

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
            savedVenue.nombre,
            savedVenue.ciudad,
            savedVenue.departamento,
            savedVenue.inaugura,
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
            vm.nombre,
            vm.ciudad,
            vm.departamento,
            vm.inaugura,
            vm.aforo,
        ));
    
    }
    async delete(venue: Venue): Promise<void> {
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
            updateVenue.nombre,
            updateVenue.ciudad,
            updateVenue.departamento,
            updateVenue.inaugura,
            updateVenue.aforo,
        );
    }
}