import { Router } from "express";
import inbound from "../controllers/inbound";
import auth from "./middlewares/auth";

const router = Router()

router.post('/inbound/sms/', auth, inbound);

export default router;
