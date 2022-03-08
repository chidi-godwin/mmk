import dotenv from "dotenv"
dotenv.config();
import { env } from "process";


const { DATABASE_URL } = env;

export const config = { DATABASE_URL }