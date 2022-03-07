import dotenv from "dotenv"
dotenv.config();
import { Dialect } from "sequelize/types";


const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_PORT,
} = process.env;

const dialect: Dialect = 'postgres';

export const config = {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: parseInt(DB_PORT),
    dialect
};