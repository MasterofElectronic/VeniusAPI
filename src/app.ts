import 'reflect-metadata';
import dataSource from './ormconfig';
import {Server} from './presentation/server';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try{
    await dataSource.initialize();
    console.log('Data Source has been initialized');
    const port = /*parseInt(process.env.PORT, 10) ||*/ 3000;
    const server = new Server({ port });
    await server.start();
  }catch(error){
    console.error('Error during Data Source initialization:', error);
  }
})();