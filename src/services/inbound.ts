import dotenv from "dotenv"
dotenv.config();
import Account from "../models/Account";
import PhoneNumber from "../models/PhoneNumber";
import { ServiceResponse, Sms } from "../types/inbound";
import { env } from "process";
import Redis from "ioredis"


export async function inboundService(data: Sms, user: Account): Promise<ServiceResponse> {
    const client = new Redis(env.REDIS_URL)

    const number = await PhoneNumber.findOne({ where: {
        number: data.to,
    }});
    

    if (!number || number.account_id !== user.id) {
        return { 
            message: "", 
            error: "to parameter not found"
        }

    }

    if (data.text.trim() === "STOP") {
        client.set(`${data.from}-${data.from}`, JSON.stringify({ from: data.from, to: data.to }), 'EX', 14400)
    }
    return { message: "inbound sms ok", error: ""}
}