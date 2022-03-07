import dotenv from "dotenv"
dotenv.config();


const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_PORT,
    DB_DIALECT,
} = process.env;

export const config = {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
};