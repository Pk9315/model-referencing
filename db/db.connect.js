const mongoose = require("mongoose")
require("dotenv").config()
const mongoURI = process.env.MONGODB

mongoose
.connect(mongoURI)
    .then(() =>{
        console.log("connected to mongoDB")
    })
        .catch((error) =>{
            console.log("Error connecting to mongoDB", error)
        })