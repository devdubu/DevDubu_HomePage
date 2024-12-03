import express from "express";
import { createMiddleware } from "@mswjs/http-middleware";
import { handler } from "./handler";
import cors from 'cors'

const app = express();
const PORT = 8080;
const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(express.json());
app.use(cors(corsOptions))
app.use(createMiddleware(...handler));


app.listen(PORT, () => console.log(`Mock server is running on port: ${PORT}`));