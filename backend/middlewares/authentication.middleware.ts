import { Next, ReqType, ResType } from "../utills/ReqResType"
import { authType } from "../utills/customTypes";
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authentication=async(req:ReqType,res:ResType,next:Next)=>{

    const token= req?.headers?.authorization?.split(' ')[1];
    try {
        jwt.verify(token,process.env.PRIVATE_KEY,(err:Boolean,code:authType)=>{
            if(!err&&code){
                req.body.userId= code._id;
                req.body.userName= code.userName;
                req.body.userImg=code.userImg;
                next();
            }else{
                console.log(err,code)
                return res.status(401).json({msg:"You are not Authorized !",status:false})
            }
        })
    } catch (error) {
        return res.status(500).json({msg:"Something went wrong",status:false})
    }


}


module.exports={
    authentication
}