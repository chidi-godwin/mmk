import cors from "cors";
import dotenv from "dotenv"
dotenv.config();
import { env } from "process";
import express, { Request, Response } from "express";
import { sequelize } from "./sequelize";
import inboundRouter from "./routes/inbound";
import outboundRouter from "./routes/outbound"
import { limiter } from "./routes/middlewares/rate";
import Account from "./models/Account";
import PhoneNumber from "./models/PhoneNumber";


const app = express();
const port: Number = parseInt(env.PORT) || 8080;


app.use(express.json());
app.use(cors({
    methods: 'POST',
    preflightContinue: true,
    origin: '*',
}));

app.use(inboundRouter);
app.use(limiter);
app.use(outboundRouter);

app.use(async (req: Request, res: Response) => {
    res.status(405).send({})
});

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await sequelize.addModels([Account, PhoneNumber])
    await sequelize.sync({ alter: true });
    console.log("Database connected");
    console.log(`press CTRL+C to stop server`);
})