// WAITING FOR: USER MODEL
const UserModel = require("../models/user")
const transporter = require("../services/nodemailer/transporter")

const addNewUser = async (req, res, next)=>{
    try {
        const user = await UserModel.create(req.body)
        if(!user){
            return res.status(400).json({
                status: "error",
                message: "Unable to create user"
            })
        } 

        res.status(201).json({
            status: "success",
            message: "User account created"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    addNewUser
}