import dotenv from "dotenv"
dotenv.config({path: "../.env"});
import { Dialect } from "sequelize/types";
import { env } from "process";


const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_PORT,
} = env;

const dialect: Dialect = 'postgres';

export const config = {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: parseInt(DB_PORT),
    dialect
};