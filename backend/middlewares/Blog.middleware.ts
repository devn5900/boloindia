import { Next, ReqType, ResType } from "../utills/ReqResType";
const {isValidURL}= require("../utills/validators")
const blogDataValidMiddlware=(req:ReqType,res:ResType,next:Next)=>{
        const {title,image,category,author,content,isPublished,tags}= req.body;

        if(!title||!author||!content||!category||typeof category!=="string"){
            return res.status(206).json({msg:"Partial Content",status:false});
        }
        if(tags&&!Array.isArray(tags)){
            return res.status(206).json({msg:"Partial Content",status:false});
        }
        if(image&&!isValidURL(image)){
            return res.status(206).json({msg:"Partial Content",status:false});
        }
        if(typeof isPublished!=='boolean'){
            return res.status(206).json({msg:"Partial Content",status:false});
            
        }
        next()

}
const commentValidMiddleware=(req:ReqType,res:ResType,next:Next)=>{
    const {postId}= req.params;
    const {comment}= req.body;
    if(!postId||!comment || typeof comment!=='string'||Array.isArray(comment)){
        return res.status(206).json({msg:"Partial Content",status:false});
    }
    next();
}
const replyValidMiddleware=(req:ReqType,res:ResType,next:Next)=>{
    const {commentId}= req.params;
    const {reply}= req.body;
    if(!commentId||!reply || typeof reply!=='string'||Array.isArray(reply)){
        return res.status(206).json({msg:"Partial Content",status:false});
    }
    next();
}
module.exports={
    blogDataValidMiddlware,
    commentValidMiddleware,replyValidMiddleware
}