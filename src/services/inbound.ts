import dotenv from "dotenv"
dotenv.config({path: "./.env"});
import Account from "../models/Account";
import PhoneNumber from "../models/PhoneNumber";
import { ServiceResponse, Sms } from "../types/inbound";
import { createClient } from "redis";
import { env } from "process";


export async function inboundService(data: Sms, user: Account): Promise<ServiceResponse> {
    const client = createClient({
        url: env.REDIS_URL
    });

    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();

    const number = await PhoneNumber.findOne({ where: {
        number: data.to,
    }});

    if ( number.account_id !== user.id) {
        return { 
            message: "", 
            error: "to parameter not found"
        }

    }

    if (data.text.trim() === "STOP") {
        await client.set(`${data.from}-${data.from}`, JSON.stringify({ from: data.from, to: data.to }), {
            EX: 14400,
            NX: true,
        })
    }
    return { message: "inbound sms ok", error: ""}
}