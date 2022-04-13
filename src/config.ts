import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

export const DB_NAME = process.env.DB_NAME ?? "";
export const DB_USERNAME = process.env.DB_USERNAME ?? "";
export const DB_PASSWORD = process.env.DB_PASSWORD ?? "";
export const DB_HOST = process.env.DB_HOST!!;
export const DB_PORT = Number.parseInt(process.env.DB_PORT!!);

export const FOOTBALL_URL = process.env.FOOTBALL_API_URL ?? "";
export const FOOTBALL_API_TOKEN = process.env.FOOTBALL_API_TOKEN ?? "";

export const headers = {
    "X-Auth-Token": FOOTBALL_API_TOKEN
}
