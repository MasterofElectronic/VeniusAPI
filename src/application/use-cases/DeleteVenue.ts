import { VenueRepository } from "../../domain/repositories/VenueRepository";



export class DeleteVenue {
    constructor(private venueRepository: VenueRepository){

    }

    async execute(id: number): Promise<void> {
        return this.venueRepository.delete(id);
    }
}