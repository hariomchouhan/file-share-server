import express from "express";
import 'dotenv/config';
import router from "./src/Routes/Routes.js";
import cors from 'cors';
import ConfigureDb from "./src/Config/db.js";


const app = express();

app.use(cors());
app.use('/', router);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
    ConfigureDb();
});