import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import { createClient } from "redis";
import { Request, Response, NextFunction } from "express";


const client = createClient({});
client.connect().then(() => console.log('Redis client connected'));


export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "", error: "limit reached for from <from>" },
  // Redis store configuration
  store: new RedisStore({
    sendCommand: (...args: string[]) => client.sendCommand(args),
  }),
});