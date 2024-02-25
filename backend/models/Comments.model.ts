const comMongo= require("mongoose")

const commentSchema= comMongo.Schema({
    
    blogId:{type:"ObjectId", ref:"blogs"},
    comment:{type:Object,required:true},
    commentedAt:{type:String,required:true, default:new Date().toLocaleString()},
    comments:[{type:"ObjectId",ref:"comments"}]
},{
    versionKey:false
})


const commentsModel= comMongo.model("comments",commentSchema)


module.exports={
    commentsModel
}