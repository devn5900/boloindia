const Submongo= require("mongoose");

const SubsSchema= Submongo.Schema({
    userId:{type:'ObjectId',ref:"users",required:true}
},{
    versionKey:false
})


const SubsModel= Submongo.model("subscribers",SubsSchema);


module.exports={
    SubsModel
}