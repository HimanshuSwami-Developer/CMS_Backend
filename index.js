// import  express  from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Routes from "./routes/route";

// import path from "path";
// import {fileURLToPath} from 'url';

// import bodyParser from "body-parser";

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

var path = require("path");
var fileURLToPath = require("url");

const PORT = process.env.PORT || 5500

dotenv.config();

app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())




mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);


// // 👇️ "/home/borislav/Desktop/javascript/index.js"
// var _filename = fileURLToPath(import.meta.url);
// console.log(_filename);

// // 👇️ "/home/borislav/Desktop/javascript"
// var _dirname = path.dirname(_filename);
// console.log('directory-name 👉️', _dirname);
// app.use(express["static"](path.join(_dirname, "/client", "build")));


app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})

