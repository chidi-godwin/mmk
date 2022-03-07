import { smsValidator } from "../schema/sms";
import { Request, Response } from "express";
import { outboundService } from "../services/outbound";

import { Sms, ServiceResponse } from "../types/inbound";

export default async function (req: Request, res: Response): Promise<Response<ServiceResponse>> {
    try {
        const data: Sms = await smsValidator.validateAsync(req.body);
        const response = await outboundService(data, req.user);

        return res.status(200).send(response)
    } catch (err: any) {
        let message = '', status=500;

        if (err.errors) {
            message = err.errors[Object.keys(err.errors)[0]].properties.message;
            status = 400;
        }
        
        return res.status(status).send({
            message,
            error: "unknown failure"
        })
    }
}