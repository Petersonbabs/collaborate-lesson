

const errorHandler = (err, req, res, next) => {

    // res.send("iiindbhdgf")
    if(res.ok){
        return res.status(200).json({
            status: "success",
            message: err.message
        })
    }
    res.status(400).json({
        status: "error",
        message: "something went wrong"
    })
    
}

module.exports = errorHandler
