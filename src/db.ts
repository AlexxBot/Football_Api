import { createConnection } from "typeorm";
import { DB_USERNAME, DB_PORT, DB_PASSWORD, DB_NAME, DB_HOST} from "./config";
import {Competitions} from './Entities/Competition'

export const connectDB = async () => {
  await createConnection({
    type: "postgres",
    username: DB_USERNAME,
    password: DB_PASSWORD,
    port: DB_PORT,
    host: DB_HOST,
    database: DB_NAME,
    entities: [Competitions],
    synchronize: true,
    ssl: false
  });
};
