import dotenv from "dotenv";
import connectDB  from "./db/db.js";


dotenv.config();
connectDB()

// timeline 30min

import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;