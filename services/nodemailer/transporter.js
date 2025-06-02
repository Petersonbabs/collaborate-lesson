const nodemailer = require ("nodemailer")
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    service:"gmail",
    secure:false,
    port:587,
    auth:{
        user: "faizahojo40@gmail.com",
        pass:"efxf ftqv bgsn fvcs"
    }
})

module.exports = transporter

transporter.verify((err, success)=>{
    if (success) {
        console.log("Ready to send email messages");
        
    }else{
        console.log(err);
        
    }
})