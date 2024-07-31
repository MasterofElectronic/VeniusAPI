import { Request, Response } from "express";
import { CreateVenues } from "../../../application/use-cases/CreateVenues";
import { DeleteVenue } from "../../../application/use-cases/DeleteVenue";
import { GetVenues } from "../../../application/use-cases/GetVenues";
import { UpdateVenue } from "../../../application/use-cases/UpdateVenue";




export class VenueController {
    
    
    constructor(
        private createVenue: CreateVenues,
        private getVenues: GetVenues,
        private updateVenue: UpdateVenue,
        private deleteVenue: DeleteVenue,
    ){}

    async createVenue(req: Request, res: Response){
        try{
            const venue = await this.createVenue.execute(req.body);
            res.status(201).json(venue);
        } catch (error:any) {
            res.status(500).json({message: error.message});
        }
    }

    async getVenues(req: Request, res: Response){
        try {
            const venues = await this.getVenues.execute(req.query);
            res.status(200).json(venues);
        } catch (error:any) {
            res.status(500).json({message: error.message});
        }
    }

    async updateVenue(req: Request, res: Response){
        try{
            const venue = await this.updateVenue.execute(parseInt(req.params.id, 10), req.body);
            res.status(200).json(venue);

        } catch (error:any) {
            res.status(500).json({message: error.message});
        }
    }

    async deleteVenue(req: Request, res: Response){
        try{
            await this.deleteVenue.execute(parseInt(req.params.id, 10));
            res.status(204).send();
        } catch (error:any) {
            res.status(500).json({message: error.message});
        }
    }

}