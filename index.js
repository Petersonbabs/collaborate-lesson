console.log("hello")
const express = require("express")
const { authRouter } = require("./router/authRouter")
// const errorHandler = require("./middlewares/errorHandler")
const app = express()
app.listen(4006, ()=>{
    console.log("app is running on 4006")
})


app.use(express.json())

app.use("/api/auth", authRouter)
// app.use(errorHandler)