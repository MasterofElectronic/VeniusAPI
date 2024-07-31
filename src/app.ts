import {Server} from './presentation/server';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
    const port = /*parseInt(process.env.PORT, 10) ||*/ 3000;
    const server = new Server({ port });
    await server.start();
  })();