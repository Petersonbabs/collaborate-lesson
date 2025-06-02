const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:[true, "Username already exist"]
    },
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:[true, "email already exist"]
    },
    password:{
        type: String,
        required:true,
        minLength: 6
    },
    role:{
        type: String,
        enum:["buyer", "admin", "rider"],
        default:"buyer",

    },
    isVerified: {
        type: Boolean,
        default:false
    },
    verificationToken: {
        type: String
        
    },
    verificationExp: {
        type: String
        
    }
})
const userModel = mongoose.model("users", userSchema)

module.exports = userModel 