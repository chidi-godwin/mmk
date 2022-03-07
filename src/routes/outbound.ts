import { Router } from "express";
import outbound from "../controllers/outbound";
import auth from "./middlewares/auth";

const router = Router()

router.post('/outbound/sms/', auth, outbound);

export default router;