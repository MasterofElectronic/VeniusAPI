import { Venue } from "../../domain/entities/Venue";
import { VenueRepository } from "../../domain/repositories/VenueRepository";


export class GetVenues{
    constructor(private venueRepository: VenueRepository){

    }

    async execute(filters: any): Promise<Venue[]> {
        return this.venueRepository.getVenues(filters);
    }
}