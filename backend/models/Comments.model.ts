const comMongo= require("mongoose")

const commentSchema= comMongo.Schema({
    
    blogId:{type:"ObjectId", ref:"blogs"},
    comments:{type:Object,required:true},
    commentedAt:{type:String,required:true, default:new Date().toLocaleString()},
    reply:[{type:Object}]
},{
    versionKey:false
})


const commentsModel= comMongo.model("comments",commentSchema)


module.exports={
    commentsModel
}