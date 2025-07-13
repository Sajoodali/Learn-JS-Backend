import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"; 
const app = express();


// timeline 20:00 min 

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

    } catch (error) {
        console.error('ERROR: ',error)
        throw error
    }
})()