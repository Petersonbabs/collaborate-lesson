console.log("hello")
const express = require("express")
const connectToDb = require("./config/connectToDb")
const app = express()
app.listen(4006, ()=>{
    console.log("app is running on 4006")
})
connectToDb()