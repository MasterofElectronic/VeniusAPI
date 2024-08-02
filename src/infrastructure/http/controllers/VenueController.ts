import { Request, Response } from "express";
import { CreateVenues } from "../../../application/use-cases/CreateVenues";
import { DeleteVenue } from "../../../application/use-cases/DeleteVenue";
import { GetVenues } from "../../../application/use-cases/GetVenues";
import { UpdateVenue } from "../../../application/use-cases/UpdateVenue";




export class VenueController {
    
    
    constructor(
        private createVenueUseCase: CreateVenues,
        private getVenuesUseCase: GetVenues,
        private updateVenueUseCase: UpdateVenue,
        private deleteVenueUseCase: DeleteVenue,
    ){}

    public async createVenue(req: Request, res: Response){
        try{
            const venue = await this.createVenueUseCase.execute(req.body);
            res.status(201).json(venue);
        } catch (error:any) {
            res.status(500).json({message: error.message});
        }
    }

    public async getVenues(req: Request, res: Response){
        try {
            const venues = await this.getVenuesUseCase.execute(req.query);
            res.status(200).json(venues);
        } catch (error:any) {
            res.status(500).json({message: error.message});
        }
    }

    public async updateVenue(req: Request, res: Response){
        try{
            const venue = await this.updateVenueUseCase.execute(parseInt(req.params.id, 10), req.body);
            res.status(200).json(venue);

        } catch (error:any) {
            res.status(500).json({message: error.message});
        }
    }

    public async deleteVenue(req: Request, res: Response){
        try{
            await this.deleteVenueUseCase.execute(parseInt(req.params.id, 10));
            res.status(204).send();
        } catch (error:any) {
            res.status(500).json({message: error.message});
        }
    }

}