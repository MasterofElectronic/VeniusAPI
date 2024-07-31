import { Venue } from '../../domain/entities/Venue';
import { VenueRepository } from '../../domain/repositories/VenueRepository';


export class UpdateVenue {
    constructor(private venueRepository: VenueRepository){}


    async execute(id: number, venue:Venue): Promise<Venue> {
        return this.venueRepository.update(id, venue);
    }

}