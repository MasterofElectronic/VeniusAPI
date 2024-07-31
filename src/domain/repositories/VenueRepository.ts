import { Venue } from "../entities/Venue";



export interface VenueRepository {
    create(venue: Venue): Promise<Venue>;
    getVenues(filters: any): Promise<Venue[]>;
    update(id: number, venue: Venue): Promise<Venue>;
    delete(venue: Venue): Promise<void>;
}