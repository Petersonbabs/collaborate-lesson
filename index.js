console.log("hello")
const express = require("express")
<<<<<<< HEAD
const  authRouter  = require("./router/authRouter")
const errorHandler = require("./middlewares/errorHandler")
=======
const authRouter = require("./router/authRouter")

// const errorHandler = require("./middlewares/errorHandler")
>>>>>>> 4a10a815b3eb5d296229ade4c71b15e98d5e09c2
const app = express()
app.listen(4006, ()=>{
    console.log("app is running on 4006")
})


app.use(express.json())

app.use("/api/auth", authRouter)
// app.use(errorHandler)