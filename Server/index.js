import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from 'path';

import userrotues from './Routes/User.js';
import videoroutes from './Routes/video.js';
import commentroutes from './Routes/Comments.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use('/uploads', express.static(path.join('uploads')));

app.get('/', (req, res) => {
    res.send("Your tube is working")
})

app.use(bodyParser.json())
app.use('/user', userrotues)
app.use('/video', videoroutes)
app.use('/comment', commentroutes)

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})

const db_url = process.env.DB_URL;
mongoose.connect(db_url).then(() => {
    console.log("Mongo Database connected");
}).catch((error) => {
    console.log(error);
})
