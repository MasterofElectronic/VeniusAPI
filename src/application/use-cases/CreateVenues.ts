import { Venue } from '../../domain/entities/Venue';
import { VenueRepository } from '../../domain/repositories/VenueRepository';


export class CreateVenues {
    constructor(private venueRepository: VenueRepository){

    }

    async execute(venue: Venue): Promise<Venue> {
        return this.venueRepository.create(venue);
    }

}