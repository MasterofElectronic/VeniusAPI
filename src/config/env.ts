import dotenv from 'dotenv';
import * as env from 'env-var';


dotenv.config();



export const DB_HOST = env.get('DB_HOST').required().asString();
export const DB_PORT = env.get('DB_PORT').required().asInt();
export const DB_USERNAME = env.get('DB_USERNAME').required().asString();
export const DB_PASSWORD = env.get('DB_PASSWORD').required().asString();
export const DB_NAME = env.get('DB_NAME').required().asString();

export const ADMIN_USERNAME = env.get('ADMIN_USERNAME').required().asString();
export const ADMIN_PASSWORD = env.get('ADMIN_PASSWORD').required().asString();
