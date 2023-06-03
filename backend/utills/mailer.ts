import { mailType } from "./customTypes";

require("dotenv").config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


const mailTo=(mailOptions:mailType,callBack:Function)=>{
    transporter.sendMail(mailOptions, function(error:Object, info:any){
        if (error) {
            console.log(error);
            callBack(false);
        } else {
            console.log('Email sent: ' + info.response);
            callBack(true);
        }
    });
}


module.exports={
    mailTo
}