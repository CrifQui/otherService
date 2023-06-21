import express  from "express";
import bodyParser from "body-parser"
import routes from "./routes";
import dotenv from "dotenv"

const app = express();
dotenv.config();

app.use(bodyParser.json());

app.use('/other', routes);

app.listen(process.env.PORT, ()=>{
    console.log(`The server is running at: ${process.env.PORT}`)
})