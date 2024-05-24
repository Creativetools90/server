import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
const url = process.env.db
const port =process.env.port || 3000;
mongoose.connect(url)
.then(()=>{
    console.log("database connection");
    app.listen(port,()=>{
        console.log("server is listening on port",port);
    })
})
.catch(e=> console.log("database connection error: " + e.message))