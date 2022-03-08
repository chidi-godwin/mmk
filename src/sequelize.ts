import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { config } from "./config/config";


export const sequelize = new Sequelize(config.DATABASE_URL);
