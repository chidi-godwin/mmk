import dotenv from "dotenv"
dotenv.config();
import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import RedisClient from "ioredis";
import { env } from "process";


const client = new RedisClient(env.REDIS_URL);

export const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 50, 
  standardHeaders: true,
  legacyHeaders: false,

  store: new RedisStore({
    // @ts-expect-error - Known issue: the `call` function is not present in @types/ioredis
    sendCommand: (...args: string[]) => client.call(args),
  }),
});
