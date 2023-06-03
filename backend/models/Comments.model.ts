const comMongo= require("mongoose")

const commentSchema= comMongo.Schema({
    
    blogId:{type:"ObjectId", ref:"blogs"},
    comments:{type:Object,required:true},
    reply:[{type:Object}]
},{
    versionKey:false
})


const commentsModel= comMongo.model("comments",commentSchema)


module.exports={
    commentsModel
}