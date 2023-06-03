const blogMongo= require("mongoose")


const BlogSchema= blogMongo.Schema({

    createdBy:{type:Object,required:true},
    title:{type:String,required:true},
    image:{type:String},
    author:{type:String,required:true},
    content:{type:String,required:true},
    isPublished:{type:Boolean,default:false},
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    tags:[{type:String}],
    comments:[{type:'ObjectId', ref:'comments'}],
    createdAt:{type:String,required:true, default:new Date().toLocaleString()},
    updatedAt:{type:String,required:true, default:new Date().toLocaleString()}

},{
    versionKey:false
})


const blogModel= blogMongo.model("blogs",BlogSchema)


module.exports={
    blogModel
}