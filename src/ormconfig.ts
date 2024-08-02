import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { VenueModel } from './infrastructure/database/models/VenueModel';


dotenv.config();


const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [VenueModel],
    migrations: [],
    subscribers: [],
  });


export default dataSource;