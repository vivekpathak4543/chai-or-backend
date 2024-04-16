//require('dotenv').config({path:'./env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is listening on port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed!!!", err);
  });

// ********************************************
//another approach
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("ERROR", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw err;
//   }
// })();
