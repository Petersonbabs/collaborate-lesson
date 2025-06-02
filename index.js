console.log("hello")
const express = require("express")
const app = express()
app.use(express.json())


app.listen(4006, ()=>{
    console.log("app is running on 4006")
})


app.use(express.json())

app.use("/api/auth", authRouter) 
app.use(errorHandler)