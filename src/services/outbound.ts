import dotenv from "dotenv"
dotenv.config({path: "../../.env"});
import Account from "../models/Account";
import PhoneNumber from "../models/PhoneNumber";
import { ServiceResponse, Sms } from "../types/inbound";
import { createClient } from "redis";
import { env } from "process";


export async function outboundService(data: Sms, user: Account): Promise<ServiceResponse> {
    const client = createClient({
        url: env.REDIS_URL
    });

    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();

    const number = await PhoneNumber.findOne({ where: {
        number: data.from,
    }});

    const value = await client.get(`${data.from}-${data.to}`);

    if (value) {
        data = JSON.parse(value);
        return {
            message: "",
            error: `sms from ${data.from} to ${data.to} blocked by STOP request`
        }
    }

    if ( number.account_id !== user.id) {
        return { 
            message: "", 
            error: "from parameter not found"
        }

    }

    return { message: "outbound sms ok", error: ""}
}