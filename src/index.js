import mongoose from "mongoose";
import { DB_NAME } from "./constants";

// timeline 30min

// import express from "express";
// const app = express();


// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("ERROr", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// })();
