import dotenv from "dotenv"
dotenv.config({path: "../.env"});
import { Dialect } from "sequelize/types";
import { env } from "process";


const { DB_URI } = env;

export const config = { DB_URI }