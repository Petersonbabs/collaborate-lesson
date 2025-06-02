const mongoose = require("mongoose")

const restuarantSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    logo : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }

})
const restuarantModel = mongoose.model("restuarant", restuarantSchema)
module.exports = restuarantModel