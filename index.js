console.log("hello")
const express = require("express")
const errorHandler = require("./middlewares/errorHandler")
require("./services/nodemailer/transporter")
const authRouter = require("./router/authRouter")


const app = express()
app.listen(4006, ()=>{
    console.log("app is running on 4006")
})   


app.use(express.json())

app.use("/api/auth", authRouter) 
app.use(errorHandler)