import { ReqType, ResType } from "../utills/ReqResType";
const {SubsModel}= require("../models/Subscriber.model");
const getSubscriber=async(req:ReqType,res:ResType)=>{
    try {
        const status= await SubsModel.find({}).populate({path:"subscribers",select:["name","email"]}).exec();
        return res.status(200).json({msg:"Success",data:status,status:true});
    } catch (error) {
        return res.status(500).json({msg:"Something went wrong !",status:true});
    }
}
const postSubscriber=async(req:ReqType,res:ResType)=>{
    const {userId}= req.body;
    try {
       const isExists= await SubsModel.findOne({userId});
       if(!isExists){
            const status= new SubsModel(userId);
            await status.save();
            return res.status(201).json({msg:"Subscribed",status:true});
       }else{
            return res.status(200).json({msg:"You are already a subscriber",status:true});
       }
    } catch (error) {
        return res.status(500).json({msg:"Something went wrong",status:false});
    }
}
module.exports={
    getSubscriber,
    postSubscriber
}