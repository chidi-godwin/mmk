import { Request, Response, NextFunction } from "express";
import Account from "../../models/Account";


export default async function (req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(403).send({ message: "Invalid Authorization"});
    }

    const base64cred = req.headers.authorization.split(' ')[1];
    const cred = Buffer.from(base64cred, 'base64').toString('ascii');
    const [username, password] = cred.split(':')
    console.log(username);
    const user = await Account.findOne({ where: {username: username} });
    
    if (user.auth_id !== password) {
        return res.status(403).send({ message: "Invalid Authorization" });
    }
    
    req.user = user;
    next()
}