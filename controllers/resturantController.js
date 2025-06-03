const restaurantModel = require("../models/RestuarantModel");

const addNewRest = async (req, res)=>{
    try {
        const resturant = await restaurantModel.create(req.body);
        if(!resturant) {
            return res.status(400).json({ 
                status: "error",
                message: "Failed to create restaurant" });
        }
        return res.status(201).json({ 
            status: "success",
            message: "Restaurant created successfully" 
        });
        
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = {addNewRest}