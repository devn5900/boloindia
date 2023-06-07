const mongo= require('mongoose');
const UserSchema= mongo.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phone:{type:Number},
    image:{type:String,default:"https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png"},
    isUser:{type:Boolean,default:true},
    isAdmin:{type:Boolean,default:false},
    isSubscriber:{type:Boolean,default:false}    
},{
    versionKey:false
})

const UserModel= mongo.model("users",UserSchema);

module.exports={
    UserModel
}