import Account from "../models/Account";

declare namespace Express {
    export interface Request {
       user?: Account;
    }
 }