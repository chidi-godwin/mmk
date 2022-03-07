import { inboundValidator } from "../schema/inbound";
import { Request, Response } from "express";
import { inboundService } from "../services/inbound";

import { InboundSms, InboundResponse } from "../types/inbound";

export default async function (req: Request, res: Response): Promise<Response<InboundResponse>> {
    try {
        const data: InboundSms = await inboundValidator.validateAsync(req.body);
        const response = await inboundService(data, req.user);

        return res.status(200).send(response)
    } catch (err: any) {
        let message = '', status=500;

        if (err.errors) {
            message = err.errors[Object.keys(err.errors)[0]].properties.message;
            status = 400;
        }
        
        return res.status(status).send({
            message: "",
            error: "unknown failure"
        })
    }
}