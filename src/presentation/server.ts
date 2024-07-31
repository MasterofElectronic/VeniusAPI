import express from 'express';
import VenueRoutes from '../infrastructure/http/routes/VenueRoutes';

interface Options {
    port: number;
}

export class Server {

    private app = express();
    private readonly port: number;


    constructor(options:Options){
        const {port} = options;
        this.port = port;


        this.app.use(express.json());
        this.app.use('/api', VenueRoutes);
    }


    async start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }



}