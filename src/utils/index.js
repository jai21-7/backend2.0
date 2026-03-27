/*As early as possible in your application,import and configure dotenv */
 //require('dotenv').config()
 //uper wali line ko likhne ka ek aur trika hn voh liche likha hn 
 import dotenv from "dotenv"; 
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import connectDB from "./db/index";


dotenv.config({
    path: './env'
})
connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT}`);
    });
})
.catch((er) => {
    console.log("MONGO db connection failed !!! ", error);
})




/*

import express from "express"
const app = express()
( async () => {
    try {
     await   mongoose.connect(`${process.env.MONGODB_URL})/${DB_NAME}`)
     app.on("error",() => {
        console.log("ERROR:", error);
        throw error
        
     })
     app.listen(process.env.PORT, () => {
        console.log(`App is listening on port $
            {process.env.PORT}`);
     })
    }catch (error) {
        console.error("ERROR: ", error);
        throw error
    }
    }
)
    isko comment isliye kr diya ki hm is code ko bad me padh paye
    ye thi hmari first approach
    second approach ye hn ki db me file bnaye aur vha code likhe vha se function export kraye aur index file me execute kraye 
*/