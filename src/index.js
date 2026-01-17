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

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.post("/data", express.json(), (req, res) => {
    const receivedData = req.body;
    res.status(201).json({ message: "Data received", data: receivedData });
});

const PORT = process.env.PORT || 3000;