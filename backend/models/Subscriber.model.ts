const Submongo= require("mongoose");

const SubsSchema= Submongo.Schema({
    subscribers:[{type:'ObjectId',ref:"users",required:true}]
},{
    versionKey:false
})


const SubsModel= Submongo.model("subscribers",SubsSchema);


module.exports={
    SubsModel
}