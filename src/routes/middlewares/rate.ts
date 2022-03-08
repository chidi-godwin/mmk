import dotenv from "dotenv"
dotenv.config();
import rateLimit from "express-rate-limit";
import RedisClient from "ioredis";
import { env } from "process";


export const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 50, 
  standardHeaders: true,
  legacyHeaders: false,
  message: "too many requests, limit reached"
});
