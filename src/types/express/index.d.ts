import Account from "../../models/Account";

// declare namespace Express {
//     export interface Request {
//        user?: Account;
//     }
//  }

declare module 'express-serve-static-core' {
   interface Request {
       user?: Account;
   }
}