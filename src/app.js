import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;