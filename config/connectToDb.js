const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const mongoUri = process.env.mongo_uri;
const connectToDb = async ()=>{
    try {
        const connect = await mongoose.connect(mongoUri);
        if (connect) {
            console.log("MongoDB Connected ✔")
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectToDb;