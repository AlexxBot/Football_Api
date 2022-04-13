import { createConnection } from "typeorm";
import { DB_USERNAME, DB_PORT, DB_PASSWORD, DB_NAME, DB_HOST} from "./config";
import {Competition} from './Entities/Competition'
import { Player } from "./Entities/Player";
import { Team } from "./Entities/Team";

export const connectDB = async () => {
  await createConnection({
    type: "postgres",
    username: DB_USERNAME,
    password: DB_PASSWORD,
    port: DB_PORT,
    host: DB_HOST,
    database: DB_NAME,
    entities: [Competition, Team, Player],
    synchronize: true,
    ssl: false
  });
};
