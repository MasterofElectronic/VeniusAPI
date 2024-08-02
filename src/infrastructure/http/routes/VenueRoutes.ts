import { Router } from "express";
import { CreateVenues } from "../../../application/use-cases/CreateVenues";
import { VenueController } from "../controllers/VenueController";
import { TypeORMVenueRepository } from "../../database/typeorm/TypeORMVenueRepository";
import { VenueModel } from "../../database/models/VenueModel";
import { GetVenues } from "../../../application/use-cases/GetVenues";
import { DeleteVenue } from "../../../application/use-cases/DeleteVenue";
import { UpdateVenue } from "../../../application/use-cases/UpdateVenue";
import { checkAdmin, checkAuth } from "../middlewares/AuthMiddleware";
import dataSource from "../../../ormconfig";



const router = Router();


const venueRepository = new TypeORMVenueRepository(dataSource.getRepository(VenueModel));
const createVenue = new CreateVenues(venueRepository);
const getVenues = new GetVenues(venueRepository);
const deleteVenue = new DeleteVenue(venueRepository);
const updateVenue = new UpdateVenue(venueRepository);
const venueController = new VenueController(createVenue, getVenues, updateVenue, deleteVenue);

router.get('/venues', checkAuth, (req, res) => venueController.getVenues(req, res));
router.post('/venues', checkAdmin, (req, res) => venueController.createVenue(req, res));
router.put('/venues/:id', checkAdmin, (req, res) => venueController.updateVenue(req, res));
router.delete('/venues/:id', checkAdmin, (req, res) => venueController.deleteVenue(req, res));

export default router;